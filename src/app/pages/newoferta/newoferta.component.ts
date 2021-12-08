import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddOferta } from 'src/app/models/addOferta';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-newoferta',
    templateUrl: './newoferta.component.html',
    styleUrls: ['./newoferta.component.css'],
    providers: [HomeService]
})
export class NewOfertaComponent implements OnInit {

    public oferta: AddOferta = new AddOferta();
    public formOferta: FormGroup;
    //public form: any = {};

    constructor(
        private _homeService: HomeService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.formOferta = this.fb.group({
            titulo: ['', [Validators.required]],
            email: ['', [Validators.required], Validators.email],
            salario: ['', [Validators.required]],
            empresa: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            ciudad: ['', [Validators.required]],
        });
     }

    ngOnInit(): void { }

    //MÉTODO QUE CREA Y AÑADE LA OFERTA
    public onCreate(): void {
        this._homeService.crearOferta(this.oferta).subscribe(
            response => {
                this.goToOfertas();
            },
            error => {
                console.log('Error ' + JSON.stringify(error));
            }
        );
    }

    //MÉTODO QUE VUELVE A LA PÁGINA ANTERIOR
    public goToOfertas(): void{
        this.router.navigate(['/home/ofertas']);
    }
    
}
