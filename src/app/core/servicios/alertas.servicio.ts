import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { Alerta } from "../interfaces/alerta.interface";

@Injectable()
export class AlertasServicio {
    alertaExitosa(alerta: Alerta): void {
        Swal.fire({
            icon: 'success',
            title: alerta.titulo,
            text: alerta.texto,
            confirmButtonColor: '#2C5C85'
        });
    }
}