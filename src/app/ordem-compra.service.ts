import { Injectable } from "@angular/core";
import { Pedido } from "./shared/pedido.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { API_URL } from "./app.api";

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient){}

    public efetivarCompra(pedido: Pedido): Observable<string>{

        const headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');

        return this.http.post(
            `${API_URL}/pedidos`,
            JSON.stringify(pedido),
            {headers: headers}
        ).pipe(
            map((resposta: any) => resposta.id)
        );
    }
}