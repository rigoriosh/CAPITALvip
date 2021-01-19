import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/componentes/admin/services/drinks.service';
import { DrinkModel } from '../../modelos/drink.model';
import { MenuService } from '../../servicios/Menu/menu.service';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  productos: DrinkModel[] | undefined;
  constructor(private servMenu: MenuService, private drinksService: DrinksService) {
    // this.productos = servMenu.getDrinks();
    this.drinksService.getDrinks().subscribe((r: any) => {
      console.log(r);
      this.productos = r;
    });
  }

  ngOnInit(): void {
  }

}
