import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { Alerta } from "../interfaces/alerta.interface";
import { Router } from "@angular/router";

@Injectable()
export class AlertasServicio {
    constructor(private readonly router: Router) {

    }
    alertaError(alerta: Alerta) {
        Swal.fire({
            icon: 'error',
            title: alerta.titulo,
            text: alerta.texto,
            confirmButtonColor: '#2C5C85'
        });
    }

    alertaExitosa(alerta: Alerta): void {
        Swal.fire({
            icon: 'success',
            title: alerta.titulo,
            text: alerta.texto,
            confirmButtonColor: '#2C5C85'
        }).then((resultado) => {
            if (resultado.isConfirmed && alerta.redireccionar) {
                this.router.navigate([alerta.urlRedireccion]);
            }
        });
    }
}