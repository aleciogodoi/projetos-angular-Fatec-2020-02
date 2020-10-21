import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  private apiurlCotacao = "https://api.hgbrasil.com/weather?format=json-cors";
  constructor(private http: HttpClient) { }

  getTempo(){
    return this.http.get(this.apiurlCotacao);
  }
}
