import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  listaCompra = ["Feijão", "Arroz", "Acabaxi", 
                  "Macarrão", "Açucar", "Queijo", "Manteiga"];

  model = [
    { nome: "Alécio Godoi",
      email: "alecio.godoi@fatec.sp.gov.br",
      telefone: "+55 11 9 9999-9999",
      site: "http:/aleciogodoi.com.br",
      skype:"alecio.skype"},
      
    { nome: "João Silva",
    email: "joao.silva@fatec.sp.gov.br",
    telefone: "+55 11 9 9999-9999",
    site: "http:/joaosilva.com.br",
    skype:"alecio.skype"},
    
    ];


  constructor() { }

  ngOnInit() {
  }

}
