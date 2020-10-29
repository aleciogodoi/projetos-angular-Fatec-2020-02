import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CursoCrudComponent } from './views/curso-crud/curso-crud.component';
import { CursoCreateComponent } from './components/curso/curso-create/curso-create.component';
import { CursoReadComponent } from './components/curso/curso-read/curso-read.component';
import { CursoUpdateComponent } from './components/curso/curso-update/curso-update.component';
import { CursoDeleteComponent } from './components/curso/curso-delete/curso-delete.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CursoCrudComponent,
    CursoCreateComponent,
    CursoReadComponent,
    CursoUpdateComponent,
    CursoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
