import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CepService } from '../cep.service';
@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  constructor(private http: HttpClient, private cepService: CepService) { }
  ngOnInit() {  }
  consultaCEP(cep, form) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //console.log(form);
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }
  populaDadosForm(dados, formulario) {
    formulario.form.patchValue({  
      logradouro: dados.logradouro,
      // cep: dados.cep,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
    // console.log(form);
  }
}