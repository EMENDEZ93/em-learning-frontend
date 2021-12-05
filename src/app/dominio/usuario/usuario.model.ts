import { Sistema } from "../sistema/sistema.model";
import { Excel } from '../excel/excel.model';

export class Usuario {
    public id: string;
    public correo: string;
    public nombre: string;
    public apellido: string;
    public excels: Excel[];
    sistema: Sistema = new Sistema();
}