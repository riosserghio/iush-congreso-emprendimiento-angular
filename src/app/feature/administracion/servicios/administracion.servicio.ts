import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { LoginRespuesta } from "../../../shared/interfaces/login.interface";
import { Observable } from "rxjs";
import { Institucion, InstitucionCreadaRespuesta, InstitucionRespuesta } from "../../../shared/interfaces/institucion.interface";
import { PaisRespuesta } from "../../../shared/interfaces/pais.interface";

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

}