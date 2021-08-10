import { ActionReducerMap } from "@ngrx/store";
import { Usuario } from "../usuario/usuario.model";
import { usuarioReducer } from "../usuario/usuario.reducer";

export interface AppState {
    usuario: Usuario,
}

export const appStateReducers: ActionReducerMap<AppState> = {
    usuario: usuarioReducer,
}