import { Rutina } from "../rutina/rutina.model";
import { Configuracion } from "../tema/configuracion/configuracion.model";

export class Hoja {
    public id: number;
    public tipo: string;
    public nombre: string;
    public realizadoHoy: boolean;
    public realizadoRutinaHoy: boolean;
    public indiceExcel: number;
    public rutina: Rutina;
    public aprender: Rutina;
    public filas: number;
    public ultimoIndiceAprendido: number;
    public configuracion: Configuracion;
    public numeroVerbosPorAprenderDiario : number; 
    public repeticionesAltaComoAprendido: number;
    public ultimaFechaAprendio: Date;
    public ultimaFechaRutina: Date;
    public porRutina: Boolean;
}