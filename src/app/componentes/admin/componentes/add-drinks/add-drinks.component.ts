import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../services/drinks.service';
import { DrinkModel } from '../../../../modulos/menu/modelos/drink.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-drinks',
  templateUrl: './add-drinks.component.html',
  styleUrls: ['./add-drinks.component.css']
})
export class AddDrinksComponent implements OnInit {

  drinks: any;
  a = [];

  constructor(private drinksService: DrinksService) { }

  ngOnInit(): void {
    this.getDrinks();
  }

  getDrinks(): any{

    this.drinksService.getDrinks()
      .subscribe((resp: any) => this.drinks = resp);

  }


}
