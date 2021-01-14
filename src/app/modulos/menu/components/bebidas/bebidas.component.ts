import { Component, OnInit } from '@angular/core';
import { DrinkModel } from '../../modelos/drink.model';
import { MenuService } from '../../servicios/Menu/menu.service';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  productos: DrinkModel [];
  constructor(private servMenu: MenuService) {
    this.productos = servMenu.getDrinks();
  }

  ngOnInit(): void {
  }

}
