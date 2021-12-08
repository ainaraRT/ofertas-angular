import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddOferta } from 'src/app/models/addOferta';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-listaoferta',
    templateUrl: './listaoferta.component.html',
    styleUrls: ['./listaoferta.component.css'],
    providers: [HomeService]
})
export class ListaOfertaComponent implements OnInit {

    public oferta: AddOferta[] | undefined;

    constructor(
        private homeService: HomeService,
        private router: Router
    ) { }

    //MÉTODO QUE NADA MÁS INICIAR LA PÁGINA, MUESTRA LA LISTA DE LAS OFERTAS
    ngOnInit(): void { 
        this.homeService.getListadoOfertas().subscribe(
            response => {
                this.oferta = response;
            },
            error => {
                console.log('Error ' + JSON.stringify(error));
            }
        );
    }

    //MÉTODO QUE VA A LA PÁGINA DEL LOGIN
    public goToLogin(): void{
        //console.log('CLICK')
        this.router.navigate(['/home/login']);
    }

    //MÉTODO QUE VE LA OFERTA EN OTRA PÁGINA
    public goToDetalleOferta(id: any): void{
        this.router.navigate(['/home/detalleOferta', id])
    }
}
