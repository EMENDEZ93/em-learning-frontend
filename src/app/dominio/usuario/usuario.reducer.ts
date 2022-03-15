import { createReducer, on } from "@ngrx/store";
import * as usuarioAction from "./usuario.actions";
import { Usuario } from "./usuario.model";
import { Sistema } from '../sistema/sistema.model';
import { state } from "@angular/animations";

export const usuarioState: Usuario = new Usuario();

const _usuarioReducer = createReducer(usuarioState,
    on( usuarioAction.crear, (state, {nombre}) => {
        return {...state, nombre };
    } ),
    on( usuarioAction.actualizar, (state, {id, correo, excels}) => {
        return {...state, id, correo, excels };
    } ),
    on( usuarioAction.actualizarExcels, (state, {excels}) => {
        return {...state, excels };
    } ),
    on( usuarioAction.actualizarExcel, (state, {excelSeleccionado}) => {
        return {
            ...state, 
            excels: state.excels.map(
                oldExcel => oldExcel.nombre === excelSeleccionado.nombre 
                ? {
                    ...oldExcel,
                    hojas: excelSeleccionado.hojas
                } 
                : oldExcel
                ),
            sistema:{ 
                ...state.sistema, 
                excelSeleccionado 
            }
        };
    } ),
    on( usuarioAction.actualizarHoja, (state, {hojaSeleccionado}) => {
        return {
            ...state, 
            sistema:{ 
                ...state.sistema, 
                hojaSeleccionado,
                excelSeleccionado: {
                    ...state.sistema.excelSeleccionado,
                    hojas: state.sistema.excelSeleccionado.hojas.map(
                        oldHoja => {
                            if(oldHoja.nombre === hojaSeleccionado.nombre) {
                                oldHoja = hojaSeleccionado;
                            }
                            return oldHoja;
                        }
                    )
                }
            }
        };
    } ),
    
    on (usuarioAction.actualizarAccion, (state, {accion}) => {
        return {
            ...state,
            sistema:{ 
                ...state.sistema, 
                accion
            }
        }
    })
)

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}