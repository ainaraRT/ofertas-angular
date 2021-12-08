import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AddOferta } from 'src/app/models/addOferta';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'detalle-oferta',
    templateUrl: './detalleoferta.component.html',
    styleUrls: ['./detalleoferta.component.css'],
    providers: [HomeService]
})
export class DetalleOfertaComponent implements OnInit {

    public sub: any;
    public oferta = new AddOferta();

    constructor(
        private route: ActivatedRoute,
        private homeService: HomeService,
        private _location: Location
    ) { }

    //MÉTODO QUE NADA MÁS INICIAR LA PÁGINA, MUESTRA TODOS LOS DATOS DE ESA OFERTA
    ngOnInit(): void {
        this.sub = this.route.paramMap.subscribe((parms: ParamMap) => {
            this.homeService.getOferta(parms.get('id')).subscribe(
                response => {
                    this.oferta = response;
                },
                error => {
                    console.log('Error ' + JSON.stringify(error));
                }
            )
        }); 
        
    }

    //MÉTODO QUE RETROCEDE A LA PÁGINA ANTERIOR
    public goBack(): void{
        this._location.back();
    }
    
}