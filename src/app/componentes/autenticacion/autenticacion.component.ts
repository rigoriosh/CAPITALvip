import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  claseContainer = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  registrarse(): void{
    this.claseContainer = true;
  }

  ingresar(): void{
    console.log(44444444);
    this.claseContainer = false;
  }

}
