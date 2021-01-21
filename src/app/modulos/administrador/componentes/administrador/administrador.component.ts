import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/componentes/admin/modelos/order-model';
import { PedidoService } from 'src/app/modulos/menu/servicios/Pedido/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPedidos();
  }
  getPedidos(): any{
    this.pedidoService.getPedidos()
      .subscribe((r: any) => {
        this.pedidos = r;
        console.log(this.pedidos)
      });
  }
  async terminarPedido(pedido: OrderModel): Promise<any>{
    console.log(pedido);

    const confirEndOrder: any = await Swal.fire({
      title: 'Finalizar pedido',
      // html: '<button id="Si">Si</button><button id="No">No</button>',
      titleText: 'Seguro de finalizar el pedido?',
      icon: 'question',
      focusConfirm: false,
      preConfirm: () => {
        return [document.getElementById('Si'), document.getElementById('Si')];
      },
      showCancelButton: true
    });

    if (confirEndOrder.isConfirmed) {
      const order = this.pedidos.findIndex( p => p.idOrder === pedido.idOrder);
      this.pedidos[order].facturado = true;
      this.pedidoService.actualizarPedido(this.pedidos[order])
        .subscribe( (r: any) => console.log);
      this.pedidos.splice(order, 1);
      console.log(this.pedidos);
      Swal.fire({
        icon: 'success',
        background: '#343a40',
        timer: 2000
      });
      /*  */
    }




  }

}
