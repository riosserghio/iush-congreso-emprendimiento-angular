import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule, SharedModule,
        SweetAlert2Module.forRoot()
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }