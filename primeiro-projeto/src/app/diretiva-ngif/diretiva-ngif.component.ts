import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  visivel = false;
  mens = "mostrar";
  constructor() { }

  ngOnInit() {
  }

  mostrar() {
    this.visivel = !this.visivel;
    if (this.mens == "mostrar")
      this.mens = "esconder";
    else
      this.mens = "mostrar";

  }

}
