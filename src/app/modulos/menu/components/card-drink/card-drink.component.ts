import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.css']
})
export class CardDrinkComponent implements OnInit {

  @Input() producto: any = { };
  cantidad: number;

  constructor() {
    this.cantidad = 0;
  }

  ngOnInit(): void {
  }

}
