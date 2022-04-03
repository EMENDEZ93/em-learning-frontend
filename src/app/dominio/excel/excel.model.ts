import { Hoja } from '../hoja/hoja.model';
export class Excel {
    public id: string;
    public nombre: string;
    public archivo: string;
    public incluir: string;
    public estado: string;
    public hojas: Hoja[];
}