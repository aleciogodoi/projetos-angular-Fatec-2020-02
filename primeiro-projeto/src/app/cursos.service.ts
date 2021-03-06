import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: string[] = ["Java", "C#", "JavaScript", "C++","Cobol"];

  constructor() { }

  // Retornar todos os cursos
  getCursos() {
    return this.cursos;
  }

  // Adiciona um novo curso
  addCurso(curso: string) {
    let i = this.cursos.indexOf(curso);
    if(i<0)
      this.cursos.push(curso);
  }

  delCurso(curso: string) {
    let i = this.cursos.indexOf(curso);
    if (i>=0)
      this.cursos.splice(i,1);
  }

  // Alteração by Renan
  setCurso(oldCurso: string, newCurso: string){
    let i = this.cursos.indexOf(oldCurso);
    if(i>=0){
      let j = this.cursos.indexOf(newCurso);
      if(j<0 && newCurso != null){
        this.cursos[i] = newCurso;
      }  
    }
  }

}
