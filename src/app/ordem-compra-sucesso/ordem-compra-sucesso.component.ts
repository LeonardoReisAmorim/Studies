import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  standalone: true,
  imports: [],
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrl: './ordem-compra-sucesso.component.css'
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() public idPedidoCompra: string | undefined

  constructor(){}

  ngOnInit(){

  }

}
