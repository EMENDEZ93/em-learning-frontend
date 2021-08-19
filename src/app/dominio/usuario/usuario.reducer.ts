import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Sistema } from "../sistema/sistema.model";
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
    on( usuario.temaSeleccionado, (state, {temaSeleccionado}) => {

        return {
            ...state, 
            temas: state.temas.map(
                tema => {
                    if(tema.tema === temaSeleccionado.tema) {
                        tema.configuracion = temaSeleccionado.configuracion;
                    }
                    return tema;
                }
            ),
            sistema:{ 
                temaSeleccionado 
            } 
        };
    } )

    ,
    on( usuario.actualizarRutinaTemaSeleccionado, (state, { englishVerbs }) => {
        return {
            ...state, 
            sistema:{ 
                ...state.sistema, 
                temaSeleccionado: { 
                    ...state.sistema.temaSeleccionado, 
                    rutina: { 
                        ...state.sistema.temaSeleccionado.rutina, 
                        englishVerbs 
                    } 
                } 
            } 
        };
    } )

    ,
    on( usuario.actualizarConfiguracionTemaSeleccionado, (state, { configuracion }) => {
        return {
            ...state, 
            sistema:{ 
                ...state.sistema, 
                temaSeleccionado: { 
                    ...state.sistema.temaSeleccionado, 
                    configuracion 
                } 
            } 
        };
    } )


)

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}