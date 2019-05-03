import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(  private activatedRoute: ActivatedRoute,
                private heroeService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => this.heroe = this.heroeService.getHeroes()[params.id]);
  }
}
