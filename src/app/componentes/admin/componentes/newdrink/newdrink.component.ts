import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { DrinkModel } from 'src/app/modulos/menu/modelos/drink.model';
import { NgForm } from '@angular/forms';
import { DrinksService } from '../../services/drinks.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FileItem } from '../../modelos/file-item';

@Component({
  selector: 'app-newdrink',
  templateUrl: './newdrink.component.html',
  styleUrls: ['./newdrink.component.css']
})
export class NewdrinkComponent implements OnInit {
  drink = new DrinkModel();
  estaSobreElemento = false;
  archivos: any[] = [];

  constructor(private drinksService: DrinksService, private activatedRoute: ActivatedRoute,
              private myRutas: Router) { }

  ngOnInit(): void {
    this.getDrinkById();
    console.log(this.archivos);
  }
  getDrinkById(): any{
    const id: string = this.activatedRoute.snapshot.paramMap.get('id') + '';
    if (id !== 'new'){
      console.log('solicitando registro');
      this.drinksService.getDrinkById(id)
      .subscribe((resp: DrinkModel) => {
        this.drink = resp;
        this.archivos[0] = resp.imagen + '';
      });
    }
  }
  guardar(formulario: NgForm): void{
    if (formulario.invalid) {
      console.log('Formulario no valido');
      return;
    }
    Swal.fire({
      title: 'Procesando',
      text: 'Enviando registro a la DB',
      allowOutsideClick: false
    });
    Swal.showLoading();

    console.log(formulario);
    this.drink.imagen = this.archivos[0] + '';
    console.log(this.drink);

    let peticion: Observable<any>;
    let texto = '';

    if (this.drink.id) {
      peticion = this.drinksService.actualizarDrink(this.drink);
      texto = 'actualizado';
    } else {
      peticion = this.drinksService.crearDrink(this.drink);
      texto = 'creado';
    }

    peticion.subscribe((resp: any) => {
      console.log(resp);
      Swal.fire({
        title: this.drink.nombre,
        text: `El registro fue ${texto}`,
        icon: 'success',
        timer: 2000
      });
      if (texto === 'creado'){
        setTimeout(() => {
          this.drinksService.actualizarDrink(this.drink)
            .subscribe((resp: any) => {
              console.log(resp);
            });
        }, 2000);
      }else{
        setTimeout(() => {
          this.myRutas.navigateByUrl('/home/admin/addDrinks');
        }, 2000);
      }
    });

  }


}
