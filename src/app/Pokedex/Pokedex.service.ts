import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Models/Pokemon';
import { map, pluck, switchMap, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  GetPokemonsPaged(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  }

  GetPokemon(url: string): Observable<any> {
    return this.http.get<Pokemon>(url)
      .pipe(map(o => {
        return {
          name: o.name.toUpperCase(),
          types: o.types.map(o => o.type.name).join(', '),
          sprite: o.sprites.other.home.front_default,
          abilities: o.abilities.map(o=> o.ability.name).join(', '),
          height: o.height,
          weight: o.weight,
          order: o.order,
          moves: o.moves.map(o=> o.move.name),
          stats: o.stats.map(o=> { return { stat: o.stat.name, base_stat: o.base_stat }}),
        }
      }),
        tap(o => console.log(o)));
  }
}
