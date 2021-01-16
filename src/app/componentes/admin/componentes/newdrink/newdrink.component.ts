import { Component, OnInit } from '@angular/core';
import { DrinkModel } from 'src/app/modulos/menu/modelos/drink.model';
import { NgForm } from '@angular/forms';
import { DrinksService } from '../../services/drinks.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-newdrink',
  templateUrl: './newdrink.component.html',
  styleUrls: ['./newdrink.component.css']
})
export class NewdrinkComponent implements OnInit {

  drink = new DrinkModel();

  constructor(private drinksService: DrinksService) { }

  ngOnInit(): void {
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
        timer: 4000
      });
    });

  }

}
