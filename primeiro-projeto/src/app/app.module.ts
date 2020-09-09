import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { FormsModule } from '@angular/forms';
import { ExemplosBindingComponent } from './exemplos-binding/exemplos-binding.component';​

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    ExemplosBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
