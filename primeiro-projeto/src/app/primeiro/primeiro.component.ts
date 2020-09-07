import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  titulo = "Primeiro Componente !!!(Teste)";
  mens = "";
  contador = 0;
  codigo = 0;
  x = 100;
  y = 20;
  nome = "Pedro Augusto";
  
  constructor() { }

  ngOnInit() {
  }

  mensagem() {
    this.contador++;
    if (this.contador <= 5) {
      if (this.contador % 2 == 0)
          this.mens = "Bom dia!!! ";
      else
        this.mens = "Boa noite!!! ";
    }
    else
      this.mens = "Chega !!!! ";
  }

  onKeyUp(campo) {
    this.codigo = 12;
  }

}
