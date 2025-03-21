import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ordem-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css'
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: number = 0;
  public complemento: string = '';
  public formaPagamento: string = '';
  public enderecoValido: boolean = false;
  public formEstado: string = 'disabled'

  constructor(){}

  ngOnInit(): void {
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

}
