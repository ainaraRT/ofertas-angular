import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AddOferta } from "../models/addOferta";
import { AppEndPoints } from '../endpoints.components';

let token = JSON.parse(<string>localStorage?.getItem('login'))['id_token'];
const cabecera = {headers: new HttpHeaders(
    {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})};

@Injectable({providedIn: 'root'})
export class HomeService {

    constructor(private _http: HttpClient) {  }

    //Obtener lista de ofertas
    getListadoOfertas(): Observable<any> {
        let url = AppEndPoints.ENDPOINTSLISTAS;
        return this._http.get(url, cabecera);
    }

    //Obtener detalle de una oferta
    //http://localhost:8080/api/ofertas/:id
    getOferta(id: string | null): Observable<any> {
        let url = AppEndPoints.ENDPOINTSOFERTA;
        return this._http.get(url + id, cabecera);
    }
    
    //Crear oferta
    //http://localhost:8080/api/ofertas
    crearOferta(oferta: AddOferta): Observable<any> {
        let url = AppEndPoints.ENDPOINTSLISTAS;
        return this._http.post<any>(url, oferta, cabecera);
        
    }

    //Eliminar oferta
    //http://localhost:8080/api/ofertas/:id
    public eliminarOferta(id: string | null): Observable<any> {
        let url = AppEndPoints.ENDPOINTSOFERTA;
        return this._http.delete<any>(url + id, cabecera);
    }
}