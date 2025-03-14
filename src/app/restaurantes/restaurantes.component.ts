import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css',
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertaService: OfertasService){}

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria("restaurante")
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    })
  }

}
