import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  data = new Date(1990, 10, 30);
  pi: number = 3.14;
  e: number = 2.718281828459045;
  
  numero: number = 1989;
  a: number = 0.259;
  b: number = 1.3495;
  valor: number[] = [123.54, 1312.987];

  frase: string = "batatinha quando nasce..., espalha a...";

  ngOnInit() {
  }

}
