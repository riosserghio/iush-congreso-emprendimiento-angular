import { BaseRespuesta } from "./base-respuesta.interface";

export interface InscripcionCongreso {
    nombres: string;
    apellidos: string;
    correo: string;
    telefono: string;
    pais: string;
    ciudad: string;
    tipoAsistente: string;
    interesesEvento: InteresEvento[];
    comoTeEnterasteEvento: DivulgacionEvento[];
    aceptaEnvioComunicacion: boolean;
    aceptaTerminosYCondicionesTratamientoDatos: boolean;
}

export interface InteresEvento {
    pregunta: string;
    respuesta: string;
}

export interface DivulgacionEvento {
    pregunta: string;
    respuesta: boolean;
}

export interface InscripcionCongresoCreadoRespuesta extends BaseRespuesta<InscripcionCongreso> { }

