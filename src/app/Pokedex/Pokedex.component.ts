import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from '../Models/Pokemon';
import { PokedexService } from './Pokedex.service';

@Component({
  selector: 'app-Pokedex',
  templateUrl: './Pokedex.component.html',
  styleUrls: ['./Pokedex.component.css']
})
export class PokedexComponent implements OnInit, OnDestroy {

  constructor(private pokedexService: PokedexService) { }

  pokemonList$!: Observable<any>;
  perPage: number = 12;
  search!: string
  pokemonCount!: number;
  pokemonCountSub!: Subscription

  ngOnInit() {
    this.pokemonCountSub = this.pokedexService.GetPokemonsPaged(0, this.perPage).subscribe(o => { this.pokemonCount = o.count })
    this.loadPokemon();
  }

  ngOnDestroy() {
    this.pokemonCountSub.unsubscribe()
  }

  onPageChange($event: any) {
    this.loadPokemon($event.first, $event.rows)
  }

  loadPokemon(offset: number = 0, limit: number = this.perPage) {
    this.pokemonList$ = this.pokedexService.GetPokemonsPaged(offset, limit)
  }

  searchPokemon(event: any) {

    if (event.keyCode === 13) {// enter
      this.pokemonList$ = this.pokedexService.GetPokemonByName(event.target.value)

      if (event.target.value === '' || event.target.value === null || event.target.value === undefined)
        this.loadPokemon()

    }
  }

}
