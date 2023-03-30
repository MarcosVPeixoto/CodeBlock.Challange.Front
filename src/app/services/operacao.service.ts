import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Carga } from "../models/carga";
import { HttpClient } from '@angular/common/http'
import { OperacaoCargueiro } from "../models/operacaoCargueiro";
import { CargaResponse } from "../models/carga-response";
@Injectable({
    providedIn: 'root'
})
export class OperacaoService{
    private api = "http://localhost:5068/operacaocargueiro/";
    
    constructor(private http: HttpClient) {
    }
    getCargas(mes:Number, ano:Number, pagina:Number){        
        return this.http.get<CargaResponse>(this.api + "getcargas/mes/"+ mes + "/ano/" + ano + "/pagina/" + pagina);
    }
    addOperacao(operacaoCargueiro: OperacaoCargueiro){
        return this.http.post(this.api,operacaoCargueiro);
    }
}