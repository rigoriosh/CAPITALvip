import { Injectable } from '@angular/core';
import { DrinkModel } from '../../modelos/drink.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  drinks: DrinkModel[];
  constructor() {
    console.log('Servicio listo to use');
    this.drinks = [
      {
        id: 1,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/1.png',
        descripcion: 'la tradicional',
        backgroud: '#b8242d',
        cantidad: 30
      },
      {
        id: 2,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/2.png',
        descripcion: 'hgfghf',
        backgroud: '#417edc',
        cantidad: 30
      },
      {
        id: 3,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/3.png',
        descripcion: '',
        backgroud: '#cc4607',
        cantidad: 30
      },
      {
        id: 4,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/4.png',
        descripcion: '',
        backgroud: '#5a82b6',
        cantidad: 30
      },
      {
        id: 5,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/5.png',
        descripcion: '',
        backgroud: '#3ba1a8',
        cantidad: 30
      },
      {
        id: 6,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/6.png',
        descripcion: '',
        backgroud: '#c9c2b8',
        cantidad: 30
      },
      {
        id: 7,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/7.png',
        descripcion: '',
        backgroud: '#ccdf32',
        cantidad: 30
      },
      {
        id: 8,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/8.png',
        descripcion: '',
        backgroud: '#4aabd1',
        cantidad: 30
      },
      {
        id: 9,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/9.png',
        descripcion: '',
        backgroud: '#d63938',
        cantidad: 30
      },
      {
        id: 10,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/10.png',
        descripcion: '',
        backgroud: '#838088',
        cantidad: 30
      },
      {
        id: 11,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/11.png',
        descripcion: '',
        backgroud: '#016ec6',
        cantidad: 30
      },
      {
        id: 12,
        nombre: 'Aguila',
        categoria: 'Cerveza',
        precio: 3000,
        imagen: 'assets/images/products/12.png',
        descripcion: '',
        backgroud: '#d4d8e1',
        cantidad: 30
      }
    ];
  }

}
