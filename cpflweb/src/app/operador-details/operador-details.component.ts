import { Component, OnInit, Input } from '@angular/core';
import { Operador } from '../operador';
import { OperadorService } from '../operador.service';
import { OperadorListComponent } from '../operador-list/operador-list.component';

@Component({
  selector: 'app-operador-details',
  templateUrl: './operador-details.component.html',
  styleUrls: ['./operador-details.component.css']
})
export class OperadorDetailsComponent implements OnInit {

  @Input() operador: Operador;

  constructor(private operadorService: OperadorService, private listComponent: OperadorListComponent) { }

  ngOnInit() {
  }

}
