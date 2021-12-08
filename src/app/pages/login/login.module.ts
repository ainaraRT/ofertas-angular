import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgModule
    ],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule {}