import { Injectable } from "@angular/core";
import { ItemCarrinho } from "./shared/item-carrinho.model"
import { Oferta } from "./shared/oferta.model";

//SINGLETON (providedIn: 'root') - NAO PRECISA IMPORTAR NO PROVIDERS
@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[]{
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho = new ItemCarrinho(Number(oferta.id!), oferta.imagens[0]!, oferta.titulo!, oferta.descricao_oferta!, oferta.valor!, 1);
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade++;
        }else{
            this.itens.push(itemCarrinho);
        }
    }

    public adicionarQuantidade(id: number):void{
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === id);
        if(!itemCarrinhoEncontrado) return;

        itemCarrinhoEncontrado.quantidade++;
    }
  
    public diminuirQuantidade(id: number):void{
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === id);
        if(!itemCarrinhoEncontrado) return;

        itemCarrinhoEncontrado.quantidade--;
        if(itemCarrinhoEncontrado.quantidade < 1){
            this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
        }
    }

    public limparCarrinho(): void{
        this.itens = [];
    }
}