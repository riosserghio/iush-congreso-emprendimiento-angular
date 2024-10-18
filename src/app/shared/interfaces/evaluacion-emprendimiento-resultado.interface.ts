import { BaseRespuesta } from "./base-respuesta.interface";

export interface ResultadoEvaluacionEmprendimiento {
    _id?: string;
    emprendimiento: string;
    promedio: number;
    idSector: string;
    idInstitucion: string;
    idPais: string;
    estado: string;
    institucion: string;
    pais: string;
    emprendedor: string;
    integrantes: string;
    sector: string;
    correoElectronicoPersonal: string;
    correoElectronicoInstitucional: string;
    pasaAPitch:boolean;
}

export interface RespuestaResultadoEvaluacionEmprendimiento extends BaseRespuesta<ResultadoEvaluacionEmprendimiento[]> { };

