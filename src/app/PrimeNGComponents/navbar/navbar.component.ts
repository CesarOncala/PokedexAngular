import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

    items!: MenuItem[];
    activeItem!: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['']},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['pokemons']},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
        this.activeItem = this.items[0];
      }

}
