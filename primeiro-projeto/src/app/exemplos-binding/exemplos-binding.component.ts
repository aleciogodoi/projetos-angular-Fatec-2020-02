import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-binding',
  templateUrl: './exemplos-binding.component.html',
  styleUrls: ['./exemplos-binding.component.css']
})
export class ExemplosBindingComponent implements OnInit {

  constructor() { }
 
  model = {
    nome: "Alécio Godoi",
    email: "alecio.godoi@fatec.sp.gov.br",
    telefone: "+55 11 9 9999-9999",
    site: "http:/aleciogodoi.com.br",
    skype:"alecio.skype"
  }
 
  ngOnInit() {
  }

}
