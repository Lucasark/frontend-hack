import { Contrato } from './contrato';
import { Operador } from './operador';

export class Chamado {
    id: number;
    status: number;
    dataAbertura: Date;
    dataFechamento: Date;
    contrato: Contrato;
    operador: Operador;
}