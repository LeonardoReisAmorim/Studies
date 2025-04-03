import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraSucessoComponent } from "../ordem-compra-sucesso/ordem-compra-sucesso.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  standalone: true,
  imports: [CommonModule, OrdemCompraSucessoComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css',
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: string | undefined;
  public itensCarrinho: ItemCarrinho[] = [];

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required]),
  })

  /* DATA BINDING 
  public pedido = new Pedido('','','','');
  public endereco: string = '';
  public numero: number = 0;
  public complemento: string = '';
  public formaPagamento: string = '';
  public enderecoValido: boolean = false;
  public formEstado: string = 'disabled'
  */

  constructor(private ordemCompraService: OrdemCompraService, private carrinhoService: CarrinhoService){}

  //@ViewChild('formulario') public formulario: NgForm | undefined; TEMPLATE FORMS

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public confirmarCompra(): void {
    //console.log(this.formulario.invalid);
    if(this.formulario.invalid){
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();
      alert('dados invalidos tente novamente'); 
      return;
    }

    if(this.itensCarrinho.length < 1){
      alert("primeiro selecione itens no carrinho");
      return;
    }

    let pedido = new Pedido(this.formulario.value.endereco, this.formulario.value.numero, this.formulario.value.complemento, this.formulario.value.formaPagamento, this.itensCarrinho)
    this.ordemCompraService.efetivarCompra(pedido).subscribe({
      next: (resposta: string) => {
        this.idPedidoCompra = resposta; 
        this.carrinhoService.limparCarrinho();
      }
    });
  }

  public getTotalCompra(): number{
    return this.itensCarrinho.reduce((acum, num) => acum + (num.valor*num.quantidade), 0);
  }

  public adicionarQuantidade(id: number):void{
    this.carrinhoService.adicionarQuantidade(id);
  }

  public diminuirQuantidade(id: number):void{
    this.carrinhoService.diminuirQuantidade(id);
  }

  /* 
  TEMPLATE FORMS
  public confirmarCompra(): void {
    let pedido = new Pedido(this.formulario?.value.endereco, this.formulario?.value.numero, this.formulario?.value.complemento, this.formulario?.value.formaPagamento)
    this.ordemCompraService.efetivarCompra(pedido).subscribe({
      next: (resposta: string) => {
        this.idPedidoCompra = resposta; 
      }
    });
  }
  */
  

  /* 
  DATA BINDING
  public AtualizaEndereco(endereco: string){
    endereco.length > 3 ? this.enderecoValido = true : this.enderecoValido = false;
    this.endereco = endereco;
    this.habilitaForm();
  }

  public AtualizaNumero(numero: string){
    this.numero = Number(numero);
  }

  public AtualizaComplemento(complemento: string){
    this.complemento = complemento;
  }

  public AtualizaPagamento(formaPagamento: string){
    this.formaPagamento = formaPagamento;
  }

  public habilitaForm() {
    this.enderecoValido ? this.formEstado = '' : this.formEstado = 'disabled';
  }

  public confirmarCompra(): void{
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero.toString();
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe(
      {
        next: (result: string) => {
          this.idPedidoCompra = result
        }
      }
    );
  }
  */

}
