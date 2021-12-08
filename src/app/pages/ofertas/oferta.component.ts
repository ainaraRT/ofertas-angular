import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { AddOferta } from 'src/app/models/addOferta';
import { HomeService } from 'src/app/services/home.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [HomeService, LoginService]
})
export class OfertaComponent implements OnInit {

    public oferta: AddOferta[] = [];

    constructor(
        private homeService: HomeService,
        private router: Router
    ) {
    }

    ngOnInit(): void { 
        this.cargarOfertas();
    }

    cargarOfertas(): void {
        this.homeService.getListadoOfertas().subscribe(
            response => {
                this.oferta = response;
            },
            error => {
                console.log('Error ' + JSON.stringify(error));
            }
        );
    }

    onDelete(id: any): void {
        if (confirm('¿Estás seguro?')) {
          this.homeService.eliminarOferta(id).subscribe(
            response => {
                this.cargarOfertas();
            });
        }
    }

    public goToHome(): void{
        this.router.navigate(['home']);
    }

    public goToDetalleOferta(id: any): void{
        this.router.navigate(['/home/detalleOferta', id]);
    }

    public goToNewOferta(): void{
        this.router.navigate(['/home/newOferta']);
    }
    
}
