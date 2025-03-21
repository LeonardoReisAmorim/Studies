import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  standalone: true,
  imports: [],
  templateUrl: './onde-fica.component.html',
  styleUrl: './onde-fica.component.css',
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondefica: string | undefined;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametros: Params) => {
      this.ofertaService.getOndeFicaOfertasPorId(Number(parametros['id']))
      .then((ondefica: string) => {
        this.ondefica = ondefica;
      })
    })
    
  }

}
