import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from '../Models/Pokemon';
import { PokedexService } from './Pokedex.service';

@Component({
  selector: 'app-Pokedex',
  templateUrl: './Pokedex.component.html',
  styleUrls: ['./Pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  pokemonList$!: Observable<any>;
  perPage: number = 12;
  search!: string


  ngOnInit() {
    this.loadPokemon(0, this.perPage);
  }

  onPageChange($event: any) {
    console.log($event)
    this.loadPokemon($event.first, $event.rows)
  }

  loadPokemon(offset: number, limit: number) {
    this.pokemonList$ = this.pokedexService.GetPokemonsPaged(offset, limit)
  }

  searchPokemon(event: any) {
    if (event.keyCode === 13) {
      this.pokemonList$ = of(null)
      this.pokemonList$ = of(this.pokedexService.GetPokemonByName(event.target.value))
    }
  }

}
