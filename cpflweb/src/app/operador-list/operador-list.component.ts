import { OperadorService } from './../operador.service';
import { Observable } from "rxjs";
import { Component, OnInit } from '@angular/core';
import { Operador } from '../operador';

@Component({
  selector: 'app-operador-list',
  templateUrl: './operador-list.component.html',
  styleUrls: ['./operador-list.component.css']
})
export class OperadorListComponent implements OnInit {
  operadores: Observable<Operador[]>;

  constructor(private operadorService: OperadorService) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.operadores = this.operadorService.getOperadoresList();
  }

  deleteOperador(id: number) {
    this.operadorService.deleteOperador(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
