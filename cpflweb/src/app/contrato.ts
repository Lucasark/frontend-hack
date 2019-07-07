import { Cliente } from './cliente';

export class Contrato {
    id: number;
    dataAssinatura: Date;
    dataFechamento: Date;
    endereco: string;
    status: number;
    cliente: Cliente;
}