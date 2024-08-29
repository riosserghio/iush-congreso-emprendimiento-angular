import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { PaisRespuesta } from "../../../shared/interfaces/pais.interface";
import { InstitucionRespuesta } from "../../../shared/interfaces/institucion.interface";
import { Emprendedor, EmprendedorCreadoRespuesta } from "../../../shared/interfaces/emprendedor.interface";
import { PreguntaEmprendimientoRespuesta } from "../../../shared/interfaces/pregunta-emprendimiento.interface";

@Injectable()

export class CongresoEmprendimientoServicio {
    constructor(protected httpServicio: HttpClient) {

    }
    obtenerPaises(): Observable<PaisRespuesta> {
        return this.httpServicio.get<PaisRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/pais/obtener`)
    }

    obtenerInstitucionesPorPais(idPais: string): Observable<InstitucionRespuesta> {
        return this.httpServicio.get<InstitucionRespuesta>(
            `${environment.urlBaseCongresoEmprendimiento}/institucionesEducativas/obtenerIESPorPais/${idPais}`)
    }

    crearEmprendedor(emprendedor: Emprendedor): Observable<EmprendedorCreadoRespuesta> {
        return this.httpServicio.post<EmprendedorCreadoRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/informacionGeneral/crear`, emprendedor);
    }

    obtenerPreguntas() {
        return this.httpServicio.get<PreguntaEmprendimientoRespuesta>(
            `${environment.urlBaseCongresoEmprendimiento}/preguntas/obtenerPreguntas`)
    }
}