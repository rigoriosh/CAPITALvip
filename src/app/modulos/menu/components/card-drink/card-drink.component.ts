import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.css']
})
export class CardDrinkComponent implements OnInit, OnChanges {

  @Input() producto: any = { };
  @Input() resetTarjProuductos = false;

  @Output() pedidoOutPutEvent = new EventEmitter<object>();

  cantidad: number;
  pedido = {};

  constructor() {
    this.cantidad = 0;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.resetTarjProuductos.currentValue);
    if (changes.resetTarjProuductos.currentValue) {
      this.cantidad = 0;
    }
  }
  incrementar(d: number): void{
    this.cantidad += d;
    this.pedido = {
      id: this.producto.id,
      cantidad: this.cantidad,
      nombre: this.producto.nombre,
      precio: this.producto.precio,
      imagen: this.producto.imagen,
      backgroud: this.producto.backgroud
    };
    console.log(this.pedido);
    this.pedidoOutPutEvent.emit(this.pedido);
  }

}
