import { Component, OnInit } from '@angular/core';
import { TempoService } from './tempo.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  public tempo;
  constructor(private tempoService:TempoService) { }

  ngOnInit() {
    this.getDadosTempo();
  }

  getDadosTempo() {
    this.tempoService.getTempo().subscribe((data) => {
      this.tempo = Array.from(Object.keys(data), k=>data[k]);
    }); 
  }
  getTemperatura() {
    return this.tempo[2].temp;
  }
  getData() {
    return this.tempo[2].date;
  }
  getHora() {
    return this.tempo[2].time;
  }
  getDescricao(){
    return this.tempo[2].description;
  }
  getPeriodo(){
    return this.tempo[2].currently;
  }
  getCidade() {
    return this.tempo[2].city;
  }
  getHumidade() {
    return this.tempo[2].humidity;
  }
  getVelocidadeVento() {
    return this.tempo[2].wind_speedy;
  }
  getNascerSol(){
    return this.tempo[2].sunrise;
  }
  getPorSol(){
    return this.tempo[2].sunset;
  }
}
