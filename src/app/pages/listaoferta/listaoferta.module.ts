import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaOfertaComponent } from './listaoferta.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ListaOfertaComponent],
    imports: [ CommonModule,
    RouterModule ],
    exports: [ListaOfertaComponent],
    providers: [],
})
export class ListaOfertaModule {}