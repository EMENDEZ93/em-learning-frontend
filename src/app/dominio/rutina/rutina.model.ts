import { Example } from "./example.model";

export class Rutina { 
    english: string[];
    spanish: string[];
    fonetica: string[];
    allSpeakFast: string[];
    example: Example[];
    numeroVerbosAprender: number;
    indiceVerboValidar: number = 0;
    indiceVerboRetrocesoTemporal: number = 0;
    indicesVerbosAprendidos: number[] = [];
    repeticionesAltaComoAprendido: number;
    indicesVerbosRepasados: number[] = [];
    numeroVerbosRutina: number = 0;
    orden: boolean;
}