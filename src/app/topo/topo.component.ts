import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css'
})
export class TopoComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  public pesquisa(event: string): void{
    console.log(event)
  }
}
