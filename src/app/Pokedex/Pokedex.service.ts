
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
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
          games: o.game_indices.map(o => o.version.name).sort(),
          abilities: o.abilities.map(o => o.ability.name).join(', '),
          height: o.height,
          weight: o.weight,
          order: o.order,
          moves: o.moves.map(o => o.move.name).sort(),
          stats: o.stats.map(o => { return { stat: o.stat.name, base_stat: o.base_stat } }),
          genus: fetch(o.species.url)
            .then(o => o.json())
            .then(o => o.genera[7]?.genus)
          ,
          evolutions: fetch(o.species.url)
            .then(o => o.json())
            .then(async o => await fetch(o.evolution_chain.url).then(o => o.json())
              .then(async o => {

                let evolutions = this.getEvolutions(o.chain.evolves_to);
                evolutions.splice(0, 0, o.chain.species?.name)

                const promise = new Promise<string[]>((resolve, reject) => {

                  let requests: Promise<any>[] = []

                  evolutions.forEach(o => {
                    requests.push(fetch('https://pokeapi.co/api/v2/pokemon/' + o))
                  })

                  Promise.all(requests)
                    .then(o => o.map(async r => await r.json()))
                    .then(async o => {

                      let sprites: any[] = []

                      let pokemons = <Pokemon[]>(await Promise.all(o))

                      for (let index = 0; index < pokemons.length; index++) {
                        sprites = [...sprites, this.getMainSprite(<Pokemon>(pokemons[index]))[0]]
                      }

                      return resolve(sprites)

                    })
                })


                return <any>
                  {
                    totalEvolves: evolutions.length,
                    evolutions:
                    [
                    evolutions.filter(o => o != ''),
                    (await promise)
                    ]
                  }
              })
            )
          ,
          sprites: this.deepSearch(o.sprites).sort((x: string, o: string): number => {
            if (x.includes('back'))
              return 1
            return 0;
          })
        }
      }));
  }

  GetPokemonByName(name: string) {
    return of(`https://pokeapi.co/api/v2/pokemon/${name}`.toLowerCase())
  }

  private deepSearch(root: any, buffer: string[] = [], search: string = ''): string[] {

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

  private getEvolutions(evolutions: any[], names: string[] = []): string[] {

    if (evolutions.length == 0)
      return names;

    for (const evolution of evolutions) {
      names.push(evolution.species.name)
      this.getEvolutions(evolution.evolves_to, names)
    }

    return names;

  }

  private getMainSprite(o: Pokemon) {

    let shiny = this.deepSearch(o.sprites, [], 'shiny')

    let final = shiny.find(o => o.includes('home/')) || shiny.find(o => !o.includes('back'))

    return [o.sprites.other.home.front_default != null ?
      o.sprites.other.home.front_default :
      o.sprites.other.dream_world.front_default != null ?
        o.sprites.other.dream_world.front_default :
        o.sprites.front_default != null ?
          o.sprites.front_default :
          this.deepSearch(o.sprites, [])[0], final]
  }
}
