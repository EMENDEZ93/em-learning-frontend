import { Excel } from '../excel/excel.model';
import { Hoja } from '../hoja/hoja.model';

export class Sistema {
    public excelSeleccionado: Excel = new Excel();
    public hojaSeleccionado: Hoja = new Hoja();
}