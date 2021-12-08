import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOfertaComponent } from './newoferta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgModule 
    ],
    exports: [NewOfertaComponent],
    providers: [],
})
export class NewOfertaModule {}