import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css',
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]> | undefined;
  private subjectPesquisa: Subject<string> = new Subject<string>;

  constructor(private ofertaService: OfertasService){}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), //executa o switchMap apos 1seg
      distinctUntilChanged(), //para fazer pesquisas distintas
      switchMap((termo: string) => {
        if(termo.trim()===''){
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertaService.pesquisaOfertas(termo);
      }),
      catchError((erro: any) => {
        console.log(erro);
        return of<Oferta[]>([])
      })
    )

    /*this.ofertas.subscribe({
      next: (ofertas: Oferta[]) => this.ofertasView = this.ofertasView,
      error: (erro: any) => console.log(erro),
      complete: () => console.log("completo")
    })*/
  }

  public pesquisa(event: string): void{
    this.subjectPesquisa.next(event)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}
