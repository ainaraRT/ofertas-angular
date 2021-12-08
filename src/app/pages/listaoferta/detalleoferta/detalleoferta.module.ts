import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleOfertaComponent } from './detalleoferta.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DetalleOfertaComponent],
    imports: [ CommonModule,
    RouterModule ],
    exports: [DetalleOfertaComponent],
    providers: [],
})
export class DetalleOfertaModule {}