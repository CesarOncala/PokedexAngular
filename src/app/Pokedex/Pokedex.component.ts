import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from '../Models/Pokemon';
import { PokedexService } from './Pokedex.service';

@Component({
  selector: 'app-Pokedex',
  templateUrl: './Pokedex.component.html',
  styleUrls: ['./Pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokedexService: PokedexService) {}

  pokemonList$!: Observable<any>;
  perPage: number = 15;

  ngOnInit() {
    this.loadPokemon(0, this.perPage);
  }

  onPageChange($event: any) {
    this.loadPokemon($event.first, this.perPage)
  }

  loadPokemon(offset: number, limit: number) {
    this.pokemonList$ = this.pokedexService.GetPokemonsPaged(offset, limit)
  }

}
