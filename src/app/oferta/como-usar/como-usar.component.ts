import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  standalone: true,
  imports: [],
  templateUrl: './como-usar.component.html',
  styleUrl: './como-usar.component.css',
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string | undefined;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService){}

  ngOnInit(): void {
    console.log(this.route.parent?.snapshot.params['id']); //this.route.parent acessa a rota do parent(geralmente o pai)
    this.ofertaService.getComoUsarOfertasPorId(Number(this.route.parent?.snapshot.params['id']))
    .then((comousar: string) => {
      this.comoUsar = comousar;
      console.log(this.comoUsar);
    })
  }

}
