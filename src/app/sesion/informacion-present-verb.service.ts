import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

const ULTIMO_INDICE_VERBO_APRENDIDO = 'UltimoIndiceVerboAprendido';
const NUMERO_VERBOS_POR_APRENDER_DIARIO = 'NumeroVerbosPorAprenderDiario';
const REPETICIONES_ALTA_COMO_APRENDIDO = 'RepeticionesAltaComoAprendido';
const ULTIMA_FECHA_APRENDIDO = 'UltimaFechaAprendio';
const ES_PREGUNTA_RESPUESTA = 'EsPreguntaRespuesta';

@Injectable({
  providedIn: 'root'
})
export class InformacionPresentVerbService {

  constructor() { }

  public guardarUltimoIndiceVerboAprendido(ultimoIndiceVerboAprendido: number){
    window.sessionStorage.removeItem(ULTIMO_INDICE_VERBO_APRENDIDO);
    window.sessionStorage.setItem(ULTIMO_INDICE_VERBO_APRENDIDO, String(ultimoIndiceVerboAprendido));
  }

  public obtenerUltimoIndiceVerboAprendido(): number {
    return +sessionStorage.getItem(ULTIMO_INDICE_VERBO_APRENDIDO);
  }

  public guardarNumeroVerbosPorAprenderDiario(numeroVerbosPorAprenderDiario: number){
    window.sessionStorage.removeItem(NUMERO_VERBOS_POR_APRENDER_DIARIO);
    window.sessionStorage.setItem(NUMERO_VERBOS_POR_APRENDER_DIARIO, String(numeroVerbosPorAprenderDiario));
  }

  public obtenerNumeroVerbosPorAprenderDiario(): number {
    return +sessionStorage.getItem(NUMERO_VERBOS_POR_APRENDER_DIARIO);
  }

  public guardarRepeticionesAltaComoAprendido(numeroVerbosPorAprenderDiario: number){
    window.sessionStorage.removeItem(REPETICIONES_ALTA_COMO_APRENDIDO);
    window.sessionStorage.setItem(REPETICIONES_ALTA_COMO_APRENDIDO, String(numeroVerbosPorAprenderDiario));
  }

  public obtenerRepeticionesAltaComoAprendido(): number {
    return +sessionStorage.getItem(REPETICIONES_ALTA_COMO_APRENDIDO); 
  }

  public guardarUltimaFechaAprendio(ultimaFechaAprendio: Date){
    window.sessionStorage.removeItem(ULTIMA_FECHA_APRENDIDO);
    window.sessionStorage.setItem(ULTIMA_FECHA_APRENDIDO, String(ultimaFechaAprendio));
  }

  public obtenerUltimaFechaAprendio(): string {
    return sessionStorage.getItem(ULTIMA_FECHA_APRENDIDO); 
  }

  public guardarEsPreguntaRespuesta(esPreguntaRespuesta: boolean){
    window.sessionStorage.removeItem(ES_PREGUNTA_RESPUESTA);
    window.sessionStorage.setItem(ES_PREGUNTA_RESPUESTA, String(esPreguntaRespuesta));
  }

  public obtenerEsPreguntaRespuesta(): boolean {
    return sessionStorage.getItem(ES_PREGUNTA_RESPUESTA) == 'true'; 
  }


  public ultimaFechaAprendidaEsHoy(): boolean {
    return this.transformarDate(this.obtenerUltimaFechaAprendio()) >= this.transformarDate(Date.now());
  }

  private transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }

}
