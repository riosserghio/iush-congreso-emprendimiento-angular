import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AutenticacionServicio {
    constructor() { }

    iniciarSesion(email: string, documentId: string) {
        localStorage.setItem('user', JSON.stringify({ email, documentId }));
    }

    estaAutenticado(): boolean {
        const user = localStorage.getItem('user');
        return user !== null;
    }

    cerrarSesion() {
        localStorage.removeItem('user');
    }
}
