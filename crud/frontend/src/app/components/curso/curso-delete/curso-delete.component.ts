import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service';
import { Curso } from './../curso.modelo';

@Component({
  selector: 'app-curso-delete',
  templateUrl: './curso-delete.component.html',
  styleUrls: ['./curso-delete.component.css']
})
export class CursoDeleteComponent implements OnInit {

  curso: Curso;
  constructor(private router: Router, private cursoService: CursoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.cursoService.readById(id).subscribe( curso => {
      this.curso = curso;
    });    
  }

  cancel() {
    this.router.navigate(['/cursos']);
  }

  deleteCurso() {
    this.cursoService.delete(''+this.curso.id).subscribe(() => {
      this.router.navigate(['/cursos']);
    });
  }

}
