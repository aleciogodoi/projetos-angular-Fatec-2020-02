import { Component, OnInit } from '@angular/core';

import { CursoService } from './../curso.service';
import { Curso } from './../curso.modelo';

@Component({
  selector: 'app-curso-read',
  templateUrl: './curso-read.component.html',
  styleUrls: ['./curso-read.component.css']
})
export class CursoReadComponent implements OnInit {

  cursos: Curso[];
  displayedColumns = ["id", "descricao", "duracao", "preco"];
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.read().subscribe(cursos => {
      this.cursos = cursos;
    })
  }
}
