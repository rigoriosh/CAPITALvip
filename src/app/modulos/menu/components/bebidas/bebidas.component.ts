import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/componentes/admin/modelos/order-model';
import { DrinksService } from 'src/app/componentes/admin/services/drinks.service';
import { DrinkModel } from '../../modelos/drink.model';
import { PedidoService } from '../../servicios/Pedido/pedido.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  productos: DrinkModel[] | undefined;
  pedido: any = [];
  total = 0;
  resetTarjProuductos = false;
  constructor(private drinksService: DrinksService, private pedidoService: PedidoService) {
    // this.productos = servMenu.getDrinks();
    this.drinksService.getDrinks().subscribe((r: any) => {
      console.log(r);
      this.productos = r;
    });
  }

  ngOnInit(): void {
  }

  addPedido(newPedido: any): any{
    // add pedido to list
    const dato = this.pedido.findIndex((e: any) => e.id === newPedido.id);
    (dato === -1) ? this.pedido.push(newPedido) : this.pedido[dato] = newPedido;
    // remove produc of the list if user don´t want it
    const deleteItem = this.pedido.findIndex((e: any) => e.cantidad  === 0);
    if (deleteItem > -1){ this.pedido.splice(deleteItem, 1); }
    // buil total
    this.total = 0;
    this.pedido.forEach((pedido: any) => {
      this.total += pedido.precio * pedido.cantidad;
    });
  }

  async realizarPedido(): Promise<void>{
    console.log(this.pedido);

    const formValues: any = await Swal.fire({
      title: 'Ingresa el numero de tu mesa',
      html: '<input id="swal-input1" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1')
        ];
      },
      showCancelButton: true
    });
    console.log(999);
    if (formValues !== undefined && formValues.value !== undefined) {
      const mesa: number =  formValues.value[0].value;
      const resultJson = JSON.stringify(this.pedido);
      const sendToDB: OrderModel = {
        pedido: resultJson,
        total: this.total,
        mesa,
        idOrder: '',
        facturado: false,
        fecha: new Date()
      };
      console.log(sendToDB);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu pedido fue enviado y sera entregado en 5 minutos',
        showConfirmButton: false,
        timer: 4000
      });
      this.enviarPedidoDB(sendToDB);
      this.pedido = [];
      this.resetTarjProuductos = true;
      setTimeout(() => {
        this.resetTarjProuductos = false;
      }, 5000);
    }
    // Swal.showLoading();
   /*  this.pedidoService.insertPedido(sendToDB)
      .subscribe((r: any) => {
        console.log(r);
      }); */
  }
  enviarPedidoDB(sendToDB: OrderModel): void {
    this.pedidoService.insertPedido(sendToDB)
      .subscribe((r: any) => {
        console.log(r);
        this.pedidoService.actualizarPedido(r)
          .subscribe((r2: any) => {
            console.log(r2);
          });
      });
  }

}
