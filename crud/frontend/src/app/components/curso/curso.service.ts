import { Injectable } from '@angular/core';
import { Curso } from './curso.modelo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost:3001/cursos";
  constructor(private http: HttpClient) { }

  read(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, curso);
  }
  
  readById(id: String):  Observable<Curso> {
    const url =`${this.url}/${id}`;
    return this.http.get<Curso>(url);
  }

  update(curso: Curso): Observable<Curso> {
    const url = `${this.url}/${curso.id}`;
    return this.http.put<Curso>(url, curso);
  }

}
