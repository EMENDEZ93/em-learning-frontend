import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import * as usuario from "./usuario.actions";
import { Usuario } from "./usuario.model";

export const usuarioState: Usuario = new Usuario();

const _usuarioReducer = createReducer(usuarioState,
    on( usuario.crear, (state, {nombre}) => {
        return {...state, nombre };
    } ),
    on( usuario.actualizar, (state, {id, correo, temas}) => {
        return {...state, id, correo, temas };
    } ),
    on( usuario.temaSeleccionado, (state, {tema}) => {
        return {...state, tema };
    } )
)

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}