import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { LoginRespuesta } from "../../../shared/interfaces/login.interface";
import { Observable } from "rxjs";
import { Institucion, InstitucionCreadaRespuesta, InstitucionRespuesta } from "../../../shared/interfaces/institucion.interface";
import { PaisRespuesta } from "../../../shared/interfaces/pais.interface";
import { RespuestaEmprendimiento } from "../../../shared/interfaces/emprendimiento.interface";
import { Evaluador, EvaluadorCreadoRespuesta, EvaluadorRespuesta } from "../../../shared/interfaces/evaluador.interface";
import { AsignacionEmprendimientoEvaluador, AsignacionEmprendimientoEvaluadorCreadoRespuesta } from "../../../shared/interfaces/asignacion-emprendimiento-evaluador.interface";
import { InscripcionCongresoRespuesta } from "../../../shared/interfaces/inscripcion-congreso.interface";

@Injectable()
export class AdministracionCongresoServicio {
    constructor(protected httpServicio: HttpClient) {

    }

    iniciarSesion(correoElectronico: string, documentoIdentidad: string, rutaAutenticacion: string): Observable<LoginRespuesta> {
        return this.httpServicio.get<LoginRespuesta>
            (`${environment.urlBaseCongresoEmprendimiento}/${rutaAutenticacion}/${documentoIdentidad}/${correoElectronico}`)
    }

    obtenerInstituciones(): Observable<InstitucionRespuesta> {
        return this.httpServicio.get<InstitucionRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/institucionesEducativas/obtenerInstitucionesEducativas`)
    }

    obtenerPaises(): Observable<PaisRespuesta> {
        return this.httpServicio.get<PaisRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/pais/obtener`)
    }

    crearInstitucion(institucion: Institucion): Observable<InstitucionCreadaRespuesta> {
        return this.httpServicio.post<InstitucionCreadaRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/institucionesEducativas/crear`,
            institucion);
    }

    obtenerEmprendimientos(): Observable<RespuestaEmprendimiento> {
        return this.httpServicio.get<RespuestaEmprendimiento>(`${environment.urlBaseCongresoEmprendimiento}/informacionEmprendimiento/obtener`)
    }

    obtenerInstitucionesPorPais(idPais: string): Observable<InstitucionRespuesta> {
        return this.httpServicio.get<InstitucionRespuesta>(
            `${environment.urlBaseCongresoEmprendimiento}/institucionesEducativas/obtenerIESPorPais/${idPais}`)
    }

    crearEvaluador(evaluador: Evaluador): Observable<EvaluadorCreadoRespuesta> {
        return this.httpServicio.post<EvaluadorCreadoRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/evaluador/crear`,
            evaluador);
    }

    obtenerEvaluadores(): Observable<EvaluadorRespuesta> {
        return this.httpServicio.get<EvaluadorRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/evaluador/obtener`)
    }

    crearAsignacionEvaluadorEmprendimientos(asignacion: AsignacionEmprendimientoEvaluador): Observable<AsignacionEmprendimientoEvaluadorCreadoRespuesta> {
        return this.httpServicio.post<AsignacionEmprendimientoEvaluadorCreadoRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/asignarEvaluador/crear`,
            asignacion);
    }

    obtenerEmprendimientosNoAsociadosPorIdEvaluador(idEvaluador: string): Observable<RespuestaEmprendimiento> {
        return this.httpServicio.get<RespuestaEmprendimiento>(`${environment.urlBaseCongresoEmprendimiento}/evaluador/listarProyectosNoAsociados/${idEvaluador}`)
    }

    obtenerInscritosCongreso(): Observable<InscripcionCongresoRespuesta> {
        return this.httpServicio.get<InscripcionCongresoRespuesta>(`${environment.urlBaseCongresoEmprendimiento}/inscripcionEvento/obtener`)
    }



}