import { Rutina } from "../rutina/rutina.model";
import { Configuracion } from "./configuracion/configuracion.model";

export class Tema {
    public tipo: string;
    public tema: string;
    public realizadoHoy: boolean;
    public indiceExcel;
    public rutina: Rutina;
    public aprender: Rutina;
    public filas: number;
    public ultimoIndiceAprendido: number;
    public configuracion: Configuracion;
}