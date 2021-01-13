import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  productos: any[];
  constructor() {
    this.productos = [
      {
        id: 1,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/1.png',
        descripcion: 'la tradicional',
        backgroud: '#b8242d'
      },
      {
        id: 2,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/2.png',
        descripcion: 'hgfghf',
        backgroud: '#417edc'
      },
      {
        id: 3,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/3.png',
        descripcion: '',
        backgroud: '#cc4607'
      },
      {
        id: 4,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/4.png',
        descripcion: '',
        backgroud: '#5a82b6'
      },
      {
        id: 5,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/5.png',
        descripcion: '',
        backgroud: '#3ba1a8'
      },
      {
        id: 6,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/6.png',
        descripcion: '',
        backgroud: '#c9c2b8'
      },
      {
        id: 7,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/7.png',
        descripcion: '',
        backgroud: '#ccdf32'
      },
      {
        id: 8,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/8.png',
        descripcion: '',
        backgroud: '#4aabd1'
      },
      {
        id: 9,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/9.png',
        descripcion: '',
        backgroud: '#d63938'
      },
      {
        id: 10,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/10.png',
        descripcion: '',
        backgroud: '#838088'
      },
      {
        id: 11,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/11.png',
        descripcion: '',
        backgroud: '#016ec6'
      },
      {
        id: 12,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/12.png',
        descripcion: '',
        backgroud: '#d4d8e1'
      }
    ];
  }

  ngOnInit(): void {
  }

}
