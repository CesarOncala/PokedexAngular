import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:HomeComponent ,redirectTo: '' },
  { path: 'pokemons',  loadChildren: ()=> import('./Pokedex/Pokedex.module').then(o=> o.PokedexModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
