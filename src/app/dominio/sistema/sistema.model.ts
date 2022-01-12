import { Excel } from '../excel/excel.model';
import { Hoja } from '../hoja/hoja.model';
import { Oracion } from '../conversacion/oracion.model';

export class Sistema {
    public excelSeleccionado: Excel = new Excel();
    public hojaSeleccionado: Hoja = new Hoja();
}