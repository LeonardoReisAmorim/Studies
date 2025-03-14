import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-diversao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './diversao.component.html',
  styleUrl: './diversao.component.css',
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertaService: OfertasService){}

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria("diversao")
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
  }

}
