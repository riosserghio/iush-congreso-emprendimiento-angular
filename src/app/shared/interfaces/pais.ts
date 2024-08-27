import { BaseRespuesta } from "./base-respuesta";

export interface Pais {
    "_id": string;
    "nombre": string;
    "descripcion": string;
}

export interface PaisRespuesta extends BaseRespuesta<Pais[]> { }