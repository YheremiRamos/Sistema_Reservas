import { Rol } from "./rol.model";

export class Usuario {
    idUsuario?: number;
    nombres?: string;
    apellidos?: string;
    telefono?: number;
    dni?: string;
    login?: string;
    password?: string;
    correo?: string;
    fechaRegistro?: Date;
    fechaNacimiento?: Date;
    direccion?: string;
    rol?: Rol;
}
