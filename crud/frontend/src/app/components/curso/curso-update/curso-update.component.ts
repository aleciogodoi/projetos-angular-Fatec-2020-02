import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service';
import { Curso } from './../curso.modelo';

@Component({
  selector: 'app-curso-update',
  templateUrl: './curso-update.component.html',
  styleUrls: ['./curso-update.component.css']
})
export class CursoUpdateComponent implements OnInit {

  curso: Curso;
  constructor(private router: Router, private cursoService: CursoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.cursoService.readById(id).subscribe( curso => {
      this.curso = curso;
    });
  }

  updateCurso() {
    this.cursoService.update(this.curso).subscribe(() => {
      this.router.navigate(['/cursos']);
    });
  }

  cancel() {
    this.router.navigate(['/cursos']);
  }

}
