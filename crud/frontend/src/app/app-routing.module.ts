import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoCreateComponent } from './components/curso/curso-create/curso-create.component';
import { CursoDeleteComponent } from './components/curso/curso-delete/curso-delete.component';
import { CursoUpdateComponent } from './components/curso/curso-update/curso-update.component';
import { CursoCrudComponent } from './views/curso-crud/curso-crud.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cursos", component: CursoCrudComponent},
  {path: "curso/create", component: CursoCreateComponent},
  {path: "curso/update/:id", component: CursoUpdateComponent},
  {path: "curso/delete/:id", component: CursoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
