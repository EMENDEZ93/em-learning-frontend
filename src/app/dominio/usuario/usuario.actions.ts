import { createAction, props } from "@ngrx/store";
import { Configuracion } from "../tema/configuracion/configuracion.model";
import { Tema } from "../tema/tema.model";

export const crear = createAction(
    '[Usuario] Crear Nombre',
    props<{ nombre: string}>()
);

export const actualizar = createAction(
    '[Usuario] Actualizar',
    props<{ id: string, correo: string, temas: Tema[]}>()
);

export const temaSeleccionado = createAction(
    '[Sistema] tema seleccionado',
    props<{ temaSeleccionado: Tema}>()
);

export const actualizarRutinaTemaSeleccionado = createAction(
    '[Sistema] actualizar Rutina Tema Seleccionado',
    props<{ englishVerbs: string[]}>()
);

export const actualizarConfiguracionTemaSeleccionado = createAction(
    '[Sistema] actualizar Configuracion Tema Seleccionado',
    props<{ configuracion: Configuracion}>()
);