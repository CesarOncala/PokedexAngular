import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PokedexService } from '../Pokedex/Pokedex.service';


@Component({
  selector: 'app-PokeCard',
  templateUrl: './PokeCard.component.html',
  styleUrls: ['./PokeCard.component.css']
})
export class PokeCardComponent implements OnInit/*, OnDestroy*/ {

  pokemon$!: Observable<any>
  //pokemon!: Pokemon
  //pokemonSub!: Subscription

  @Input() url!: string;


  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokemon$ = this.pokedexService.GetPokemon(this.url)
    // this.pokemonSub = this.pokedexService.GetPokemon(this.url)
    //   .subscribe(o => this.pokemon = o)
  }

  // ngOnDestroy() {
  //   this.pokemonSub.unsubscribe()
  // }

}
