import { Component } from '@angular/core';

import {NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';

registerLocaleData(localeBR, 'pt-BR');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide:LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class AppComponent {
  title = 'primeiro-projeto';
}
