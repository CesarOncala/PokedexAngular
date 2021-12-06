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


    this.pokemonList$ = this.pokedexService.GetPokemonsPaged(0, 10)
  }

  onPageChange($event: any) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    console.log($event)
  }


  paginate(event: any) {
    //event.first: Index of first record being displayed
    //event.rows: Number of rows to display in new page
    //event.page: Index of the new page
    //event.pageCount: Total number of pages
    let pageIndex = event.first / event.rows + 1 // Index of the new page if event.page not defined.
    console.log(event)
  }




}
