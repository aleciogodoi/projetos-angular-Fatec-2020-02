import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})

export class DadosComponent implements OnInit {
  public dados = [];

  constructor(private myservice: DadosService) { }

  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.dados = Array.from(Object.keys(data), k=> data[k]);
    });
  }

}
