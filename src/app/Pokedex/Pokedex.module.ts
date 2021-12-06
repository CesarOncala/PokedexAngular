import { PokeCardComponent } from './../PokeCard/PokeCard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './Pokedex.component';
import { PokedexRoutingModule } from './Pokedex.routing.module';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PokedexRoutingModule,
    PaginatorModule
  ],
  declarations: [PokedexComponent, PokeCardComponent],
  exports: [PokedexComponent]
})
export class PokedexModule {}
