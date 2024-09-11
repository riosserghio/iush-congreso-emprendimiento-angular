import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { NgModule } from "@angular/core";
import { InicioAdministracionComponent } from "./componentes/inicio-administracion/inicio-administracion.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'opciones',
        component: InicioAdministracionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdministracionRoutingModule { }  