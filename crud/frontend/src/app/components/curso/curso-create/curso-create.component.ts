import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../curso.service';
import { Curso } from './../curso.modelo';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  curso: Curso = {
    descricao: null,
    duracao: null,
    preco: null
  };

  constructor(private router: Router, private cursoService: CursoService) { }

  ngOnInit() {
  }


  cancel(){
    this.router.navigate(['/cursos']);
  }

  createCurso(): void{
    this.cursoService.create(this.curso).subscribe( () =>{
      this.router.navigate(['/cursos']);
    });
  }

}
