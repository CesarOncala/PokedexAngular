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

  constructor(private pokedexService: PokedexService) { }
  pokemonList$!: Observable<any>

  ngOnInit() {
    this.loadPokemon(0,25);
  }

  onPageChange($event: any) {

    this.loadPokemon($event.first,25)

    console.log($event)

  }

  loadPokemon(offset: number, limit: number) {
    this.pokemonList$ = this.pokedexService.GetPokemonsPaged(offset,limit)
  }

}
