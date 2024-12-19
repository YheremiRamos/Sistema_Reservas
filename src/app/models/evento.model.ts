import { Usuario } from "./usuario.model";


export class Evento {
    idEvento?: number;          
    organizador?: Usuario;    
    titulo?: string;          
    descripcion?: string;       
    ubicacion?: string;         
    capacidadMaxima?: number;   
    fechaHora?: Date;           
    esPublico?: boolean;        
    reservas?: number;          

}
