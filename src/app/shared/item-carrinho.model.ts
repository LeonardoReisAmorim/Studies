import { Foto } from "./foto.model";

export class ItemCarrinho{
    constructor(
        public id: number,
        public img: Foto,
        public titulo: string,
        public descricaoOferta: string,
        public valor: number,
        public quantidade: number
    ){}
}