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
          name: o.name,
          types: o.types.map(o => o.type.name).join(', '),
          sprite: this.getMainSprite(o),

          abilities: o.abilities.map(o => o.ability.name).join(', '),
          height: o.height,
          weight: o.weight,
          order: o.order,
          moves: o.moves.map(o => o.move.name).sort(),
          stats: o.stats.map(o => { return { stat: o.stat.name, base_stat: o.base_stat } }),
          sprites: this.deepSearch(o.sprites).sort((x: string, o: string): number => {
            if (x.includes('back'))
              return 1
            return 0;
          })
        }
      }));
  }

  deepSearch(root: any, buffer: string[] = [], search: string = ''): string[] {

    let sprites: string[] = buffer;

    for (const prop in root) {

      if (typeof root[prop] === "object" && root[prop] != null)
        this.deepSearch(root[prop], sprites)
      else
        sprites.push(root[prop])
    }

    sprites = sprites.filter(o => {
      if (o != null && search === '')
        return true;
      else if (o != null && o.includes(search))
        return true;

      return false;
    })

    return sprites;
  }

  getMainSprite(o: any) {

    let shiny = this.deepSearch(o.sprites, [], 'shiny')

    let final = shiny.find(o => o.includes('home/')) || shiny.find(o => !o.includes('back'))

    return [o.sprites.other.home.front_default != null ?
      o.sprites.other.home.front_default : o.sprites.other.dream_world.front_default != null ?
        o.sprites.other.dream_world.front_default : o.sprites.front_default, final]
  }
}
