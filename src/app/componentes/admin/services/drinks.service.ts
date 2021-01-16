import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkModel } from '../../../modulos/menu/modelos/drink.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private urlDB = 'https://capitalvip-3ec1e-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearDrink(drink: DrinkModel): any{
    return this.http.post(`${this.urlDB}/drinks.json`, drink)
      .pipe(
        map((resp: any) => {
          drink.id = resp.name;
          return drink;
        })
      );
  }

  actualizarDrink(drink: DrinkModel): any{

    console.log('actualizando');
    const tempDrink = {...drink}; console.log(tempDrink);
    // delete tempDrink.id;
    return this.http.put(`${this.urlDB}/drinks/${drink.id}.json`, drink);

  }

  getDrinks(): any{
    console.log(66666);
    return this.http.get(`${this.urlDB}/drinks.json`)
    .pipe(map((resp: any) => this.ajustarDataDrinks(resp)));
  }

  private ajustarDataDrinks(drinkObj: any): any{
    const bebidas: DrinkModel[] = [];
    console.log(drinkObj);
    if (drinkObj === null){return[]; }

    console.log(Object.keys(drinkObj));
    Object.keys(drinkObj).forEach(key => {
      const hero: DrinkModel = drinkObj[key];
      bebidas.push(drinkObj[key]);
    });
    // this.drinks = bebidas;
    console.log(bebidas);
    return bebidas;
  }

  /* getDrinkById(id: string){
    return this.http.get
  } */
}
