import { Rutina } from "../rutina/rutina.model";
import { Configuracion } from "../tema/configuracion/configuracion.model";
import { Conversacion } from '../conversacion/conversacion.models';
import { DatePipe } from "@angular/common";

export class Hoja {
    public id: number;
    public tipo: string;
    public nombre: string;
    public realizadoHoy: boolean;
    public realizadoRutinaHoy: boolean;
    public realizadoSpeakingHoy: boolean;
    public indiceExcel: number;
    public rutina: Rutina;
    public aprender: Rutina;
    public conversacion: Conversacion;
    public filas: number;
    public ultimoIndiceAprendido: number;
    public configuracion: Configuracion;
    public numeroVerbosPorAprenderDiario : number; 
    public repeticionesAltaComoAprendido: number;
    public ultimaFechaAprendio: Date;
    public ultimaFechaRutina: Date;
    public ultimaFechaSpeaking: Date;
    public porRutina: Boolean;
    public speaking: Boolean;

}