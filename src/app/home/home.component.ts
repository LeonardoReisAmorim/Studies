import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta> = [];

  constructor (private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService.getOfertas()
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
    .catch((param: any) => {
      console.log(param);
    })
  }
}
