import { Component, OnInit } from '@angular/core';
import { Operador } from '../operador';
import { OperadorService } from '../operador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  operador: Operador = new Operador();
  submitted = false;

  constructor(private operadorService: OperadorService) { }

  ngOnInit() {
  }

  newOperador(): void {
    this.submitted = false;
    this.operador = new Operador();
  }

  login(id: number) {
    this.operadorService.getOperador(id)
      .subscribe(operador => this.operador = operador);
  }

  onSubmit() {
    this.submitted = true;
  }

}
