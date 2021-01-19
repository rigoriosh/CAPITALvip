import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../services/drinks.service';
import { DrinkModel } from '../../../../modulos/menu/modelos/drink.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-drinks',
  templateUrl: './add-drinks.component.html',
  styleUrls: ['./add-drinks.component.css']
})
export class AddDrinksComponent implements OnInit {

  drinks: any;
  loading = true;
  thereDrinks = false;

  constructor(private drinksService: DrinksService, private misRutas: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.getDrinks();
  }

  getDrinks(): any{

    this.drinksService.getDrinks()
      .subscribe((resp: any) => {
        this.drinks = resp;
        this.loading = false;
        if (resp.length < 1){
          this.thereDrinks = true;
        }
      });

  }

  deleteDrink(drink: DrinkModel, i: number): void{
    Swal.fire({
      title: '¿Is your sure?',
      text: `Are you sure to delete ${drink.nombre}, from DB`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(resp => {
      if (resp.value) {
        this.drinksService.deleteDrinkById(drink.id + '')
      .subscribe((resp: any) => {
        this.drinks.splice(i, 1);
        if (this.drinks < 1) {
          this.thereDrinks = true;
        }
        Swal.fire({
          title: 'Inof',
          text: `you are deleted at ${drink.nombre}` ,
          icon: 'info',
          timer: 2000
        });
      });

      }
    });
  }


}
