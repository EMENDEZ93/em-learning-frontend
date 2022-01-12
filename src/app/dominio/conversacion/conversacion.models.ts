import { Oracion } from "./oracion.model";

export class Conversacion {
    public realizadoHoy: boolean;
    public numeroVerbosAprender: number;
    public indiceVerboValidar: number = 0;
    public indiceVerboRetrocesoTemporal: number = 0;
    public repeticionesAltaComoAprendido: number = 0;
    public oraciones: Oracion[];
    public indicesVerbosAprendidos: number[] = [];
}