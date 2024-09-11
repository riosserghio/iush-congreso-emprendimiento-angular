import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { LoginRespuesta } from "../../../shared/interfaces/login.interface";
import { Observable } from "rxjs";

@Injectable()
export class AdministracionCongresoServicio {
    constructor(protected httpServicio: HttpClient) {

    }

    iniciarSesion(correoElectronico: string, documentoIdentidad: string, rutaAutenticacion:string): Observable<LoginRespuesta> {
        return this.httpServicio.get<LoginRespuesta>
            (`${environment.urlBaseCongresoEmprendimiento}/${rutaAutenticacion}/${documentoIdentidad}/${correoElectronico}`)
    }
}