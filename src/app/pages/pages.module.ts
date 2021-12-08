import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OfertaComponent } from './ofertas/oferta.component';
import { NewOfertaComponent } from './newoferta/newoferta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListaOfertaComponent } from './listaoferta/listaoferta.component';
import { DetalleOfertaComponent } from './listaoferta/detalleoferta/detalleoferta.component';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        OfertaComponent,
        DetalleOfertaComponent,
        NewOfertaComponent,
        ListaOfertaComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [
        HomeComponent,
        LoginComponent,
        OfertaComponent,
        DetalleOfertaComponent,
        NewOfertaComponent,
        ListaOfertaComponent
    ],
    providers: [],
})
export class PagesModule {}