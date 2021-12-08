import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
  responsiveOptions: any

  constructor(private pokedexService: PokedexService) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.pokemon$ = this.pokedexService.GetPokemon(this.url)
    // this.pokemonSub = this.pokedexService.GetPokemon(this.url)
    //   .subscribe(o => this.pokemon = o)
  }

  ngOnChanges(changes: SimpleChanges) {
    // alert(changes.url.currentValue)
    this.pokemon$ = this.pokedexService.GetPokemon(changes.url.currentValue)
  }

}
