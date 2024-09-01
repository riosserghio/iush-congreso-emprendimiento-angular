import { BaseRespuesta } from "./base-respuesta.interface";
import { RespuestaPregunta } from "./respuesta-pregunta.interface";

export interface Emprendimiento {
    _id?: string;
    idSector: string;
    idIES: string;
    idEmprendedor?: string;
    fecha: string;
    fechaInscripcion?: string;
    respuestas: RespuestaPregunta[]
}

export interface RespuestaEmprendimientoCreado extends BaseRespuesta<Emprendimiento> { };