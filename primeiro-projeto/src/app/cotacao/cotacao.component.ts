import { Component, OnInit } from '@angular/core';
import { CotacaoService } from './cotacao.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

  public cotacao: any[] = [];
  public dataCotacao: String;

  constructor(private cotacaoService: CotacaoService) { }

  ngOnInit() {
    this.dataCotacao = this.getDataAtual();
    this.getCotacao(this.dataCotacao);
  }

  getDataAtual(){
    let data = new Date();
    let dataAtual: String;
    dataAtual = data.getFullYear().toString();
    dataAtual += "-"+("0"+(data.getMonth()+1).toString()).substr(-2);
    dataAtual += "-"+("0"+data.getDate().toString()).substr(-2);
    return dataAtual;
  }

  getCotacao(dataCotacao: String) {
    let dataAux = dataCotacao.substr(5,2);
    dataAux += "-"+dataCotacao.substr(8,2);
    dataAux += "-"+dataCotacao.substr(0,4);
    this.cotacaoService.getCotacao(dataAux).subscribe((data) => {
      this.cotacao = Array.from(Object.keys(data), k=>data[k]);
    }); 
  }

  getCotacaoCompra(){
    return (Number)(this.cotacao[1][0].cotacaoCompra);
  }

  getCotacaoVenda(){
    return (Number)(this.cotacao[1][0].cotacaoVenda);
  }

  getDataHoraVenda(){
    return this.cotacao[1][0].dataHoraCotacao;
  }

}
