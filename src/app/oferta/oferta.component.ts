import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css',
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta | undefined;
  public tempo: number = 0;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']); //obtem um parametro da rota, bom para passar parametros pela rota. neste caso obtem o 'id', mas pode obtem outros tipo 'date' ou outros;
    this.route.params.subscribe((parametros: any) => {
      this.ofertaService.getOfertasPorId(Number(parametros.id))
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })
    })
    
    
    
    /*trabalhando com observavel. O subscribe é um observador e está se inscrevendo em um observavel.
    definindo como o observavel deve lidar com instrucoes, erro e a conclusao. Neste caso, a primeira acao é lidar com instrucoes.
    a segunda lidar com erros e a ultima lidar com conclusao. Parecido com then, catch e finally

    this.route.params.subscribe(
      (parametro: any) => { console.log(parametro) },
      (erro: any) => { console.log(erro) },
      () => console.log("processamento finalizado")
    )
    */
    
    /* Observable.create(interval(500) = estou criando um observavel que vai ficar mandando numeros infinitamente dentro do intervalo estabelecido.
       subscribe() = criando um observador que vai ficar observando o tempo e vai realizar alguma acao
       ele vai ficar observando o tempo e a cada vez q o tempo for disparado, o subscribe vai realizar a acao de mostrar no console(exemplo)

       Observable.create(interval(500).subscribe((intervalo: number) => {
       this.tempo = intervalo;
    }))
     */

    /*
    observable (observavel)
    let observadorteste = Observable.create((observer: Observer<string>) => {
      observer.next('primeiro evento')
      observer.next('segundo evento')
      //observer.error('erro')
      observer.complete()
    });
    observable (observador)
    observadorteste.subscribe(
      (resultado: any) => console.log(resultado),
      (erro: any) => console.log(erro),
      () => console.log('finalizou')
    )
    */
   
  }
}
