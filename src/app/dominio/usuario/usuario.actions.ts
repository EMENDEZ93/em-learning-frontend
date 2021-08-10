import { createAction, props } from "@ngrx/store";
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
    props<{ tema: string}>()
);