import { Rutina } from "../rutina/rutina.model";
import { Configuracion } from "./configuracion/configuracion.model";

export class Tema {
    public tema: string;
    public realizadoHoy: boolean;
    public indiceExcel;
    public rutina: Rutina;
    public configuracion: Configuracion;
}