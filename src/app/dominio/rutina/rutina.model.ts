
export class Rutina { 
    english: string[];
    spanish: string[];
    numeroVerbosAprender: number;
    indiceVerboValidar: number = 0;
    indiceVerboRetrocesoTemporal: number = 0;
    indicesVerbosAprendidos: number[] = [];
    repeticionesAltaComoAprendido: number;
    indicesVerbosRepasados: number[] = [];
    numeroVerbosRutina: number = 0;
    orden: boolean;
}