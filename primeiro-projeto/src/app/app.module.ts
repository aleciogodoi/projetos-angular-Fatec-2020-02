import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { FormsModule } from '@angular/forms';
import { ExemplosBindingComponent } from './exemplos-binding/exemplos-binding.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { CursosComponent } from './cursos/cursos.component';​
import { CursosService } from './cursos.service';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './pipes-personalizados/camel-case.pipe';
import { NumerosRomanosPipe } from './pipes-personalizados/numeros-romanos.pipe';
import { TestePipePipe } from './pipes-personalizados/teste-pipe.pipe';
import { HomeComponent } from './rotas/home/home.component';
import { PrimeiraComponent } from './rotas/primeira/primeira.component';
import { SegundaComponent } from './rotas/segunda/segunda.component';
import { TerceiraComponent } from './rotas/terceira/terceira.component';
import { QuartaComponent } from './rotas/quarta/quarta.component';
import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { DadosComponent } from './dados/dados/dados.component';
import { CepComponent } from './cep/cep/cep.component';
import { HttpClientModule } from '@angular/common/http';
import { DadosService } from './dados/dados.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    ExemplosBindingComponent,
    DiretivaNgifComponent,
    DiretivaNgforComponent,
    CursosComponent,
    PipesComponent,
    CamelCasePipe,
    NumerosRomanosPipe,
    TestePipePipe,
    HomeComponent,
    PrimeiraComponent,
    SegundaComponent,
    TerceiraComponent,
    QuartaComponent,
    PaginaNaoEncontradaComponent,
    DadosComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CursosService, DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
