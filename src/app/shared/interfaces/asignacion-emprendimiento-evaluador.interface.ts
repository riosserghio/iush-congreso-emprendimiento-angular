import { BaseRespuesta } from "./base-respuesta.interface";

export interface AsignacionEmprendimientoEvaluador {
    _id?: string;
    idEvaluador: string;
    emprendimientos: string[];
}

export interface AsignacionEmprendimientoEvaluadorCreadoRespuesta extends BaseRespuesta<AsignacionEmprendimientoEvaluador> { };
