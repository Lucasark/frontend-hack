import { Agenda } from './agenda';
import { Curso } from './curso';
import { Avaliacao } from './avaliacao';

export class Operador {
    id: number;
    nome: string;
    login: string;
    password: string;
    agendas: Array<Agenda>;
    avaliacoes: Array<Avaliacao>;
    cursos: Array<Curso>;
}