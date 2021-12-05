import { createAction, props } from "@ngrx/store";
import { Configuracion } from "../tema/configuracion/configuracion.model";
import { Excel } from '../excel/excel.model';
import { Hoja } from '../hoja/hoja.model';

export const crear = createAction(
    '[Usuario] Crear Nombre',
    props<{ nombre: string}>()
);

export const actualizar = createAction(
    '[Usuario] Actualizar',
    props<{ id: string, correo: string, excels: Excel[]}>()
);

export const actualizarRutinaTemaSeleccionado = createAction(
    '[Sistema] actualizar Rutina Tema Seleccionado',
    props<{ englishVerbs: string[]}>()
);

export const actualizarConfiguracionTemaSeleccionado = createAction(
    '[Sistema] actualizar Configuracion Tema Seleccionado',
    props<{ configuracion: Configuracion}>()
);

export const actualizarExcels = createAction(
    '[Sistema] actualizar Lista Excel',
    props<{ excels: Excel[]}>()
);

export const actualizarExcel = createAction(
    '[Sistema] actualizar Excel',
    props<{ excelSeleccionado: Excel}>()
);

export const actualizarHoja = createAction(
    '[Sistema] actualizar Hoja',
    props<{ hojaSeleccionado: Hoja}>()
);