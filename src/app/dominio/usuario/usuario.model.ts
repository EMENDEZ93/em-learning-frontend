import { Sistema } from "../sistema/sistema.model";
import { Tema } from "../tema/tema.model";

export class Usuario {
    public id: string;
    public correo: string;
    public nombre: string;
    public apellido: string;
    public temas: Tema[];
    sistema: Sistema;
}