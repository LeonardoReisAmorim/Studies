import { Oferta } from "./shared/oferta.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "./app.api";

@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get<Array<Oferta>>(`${API_URL}/ofertas?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get<Array<Oferta>>(`${API_URL}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta);
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get<Array<Oferta>>(`${API_URL}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta.shift();
        });
    }

    public getComoUsarOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${API_URL}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta[0].descricao);
    }

    public getOndeFicaOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${API_URL}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta[0].descricao);
    }
}