import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-crud',
  templateUrl: './curso-crud.component.html',
  styleUrls: ['./curso-crud.component.css']
})
export class CursoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCursoCreate() {
    this.router.navigate(['/curso/create']);
  }

}
