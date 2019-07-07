import { Component, OnInit } from '@angular/core';
import { Operador } from '../operador';
import { OperadorService } from '../operador.service';

@Component({
  selector: 'app-form-operador',
  templateUrl: './form-operador.component.html',
  styleUrls: ['./form-operador.component.css']
})
export class FormOperadorComponent implements OnInit {

  operador: Operador = new Operador();
  submitted = false;

  constructor(private operadorService: OperadorService) { }

  ngOnInit() {
  }

  newOperador(): void {
    this.submitted = false;
    this.operador = new Operador();
  }

  save() {
    this.operadorService.createOperador(this.operador)
      .subscribe(data => console.log(data), error => console.log(error));
    this.operador = new Operador();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
