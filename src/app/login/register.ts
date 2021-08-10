export class Registrer {
    id: string;
    correo: string;
    contrasena: string;
    ultimoIndiceAprendido: number;

    constructor(id: string, correo: string, contrasena: string){
        this.id = id;
        this.correo = correo;
        this.contrasena = contrasena;
        this.ultimoIndiceAprendido = 0;
    }

}
