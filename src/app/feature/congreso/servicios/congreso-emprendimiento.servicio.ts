import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Pais } from "../../../shared/interfaces/pais";

@Injectable()

export class CongresoEmprendimientoServicio {
    constructor(protected httpServicio: HttpClient) {

    }
    obtenerPaises(): Observable<Pais[]> {
        return this.httpServicio.get<Pais[]>(`${environment.urlBaseCongresoEmprendimiento}/pais/obtener`)
    }
}