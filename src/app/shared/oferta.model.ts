import { Foto } from "./foto.model";

export class Oferta {
    public id: number | undefined;
    public categoria: string | undefined;
    public titulo: string | undefined;
    public descricao_oferta: string | undefined;
    public anunciante: string | undefined;
    public valor: number | undefined;
    public destaque: boolean | undefined;
    public imagens: Array<Foto> = [];
}