import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private apiurl = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.apiurl);
  }

}
