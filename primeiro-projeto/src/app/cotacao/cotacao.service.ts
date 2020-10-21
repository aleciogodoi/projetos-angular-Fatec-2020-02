import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

   //"https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2704-24-2020%27&$top=100&$format=json"
  private apiurlCotacao = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=";
  constructor(private http: HttpClient) { }

  getCotacao(data: String){
    return this.http.get((this.apiurlCotacao+"%27"+data+"%27&$top=100&$format=json"));
  }
}