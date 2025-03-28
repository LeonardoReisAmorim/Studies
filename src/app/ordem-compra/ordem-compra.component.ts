import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css',
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public pedido = new Pedido('','','','');
  public endereco: string = '';
  public numero: number = 0;
  public complemento: string = '';
  public formaPagamento: string = '';
  public enderecoValido: boolean = false;
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService){}

  ngOnInit(): void {
    //this.ordemCompraService.efetivarCompra();
  }

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

    this.ordemCompraService.efetivarCompra(this.pedido).subscribe();

  }

}
