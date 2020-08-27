import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  titulo = "Primeiro Componente !!!";
  x = 10;
  y = 20;
  
  constructor() { }

  ngOnInit() {
  }

}
