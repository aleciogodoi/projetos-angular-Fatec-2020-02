import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { ExemplosBindingComponent } from './exemplos-binding/exemplos-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './rotas/home/home.component';
import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrimeiraComponent } from './rotas/primeira/primeira.component';
import { QuartaComponent } from './rotas/quarta/quarta.component';
import { SegundaComponent } from './rotas/segunda/segunda.component';
import { TerceiraComponent } from './rotas/terceira/terceira.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"primeira", component: PrimeiraComponent},
  {path:"segunda", component: SegundaComponent},
  {path:"terceira", component: TerceiraComponent},
  {path:"quarta", component: QuartaComponent},
  {path:"diretiva-ngif", component: DiretivaNgifComponent},
  {path:"diretiva-ngfor", component: DiretivaNgforComponent},
  {path:"cursos", component: CursosComponent},
  {path:"pipes", component: PipesComponent},
  {path: "exemplos-bindings", component: ExemplosBindingComponent},
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path:"**", component: PaginaNaoEncontradaComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
