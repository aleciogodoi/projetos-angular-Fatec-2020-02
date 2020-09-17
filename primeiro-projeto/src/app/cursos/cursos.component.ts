import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[];
  curso: string;
  constructor(private cursosService: CursosService) { } // Injeção de dependencia

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  } 
  
  novoCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

  excluirCurso(curso: string){
    this.cursosService.delCurso(curso);
  }

}
