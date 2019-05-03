import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-filtrados',
  templateUrl: './heroes-filtrados.component.html',
  styles: []
})
export class HeroesFiltradosComponent implements OnInit {
  heroes: Heroe[];

  constructor(  private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe (params => this.heroes = this.heroesService.buscarHeroe(params.texto));
  }
}
