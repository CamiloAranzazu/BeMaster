import { Component, OnInit } from '@angular/core';
import * as data from '../../core/services/jsons/category.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: [] = [];
  movies: any[] = [];

  constructor() {
    this.getJsonCategories
   }

  ngOnInit(): void {
    this.categories = this.getJsonCategories()?.default.NETFLIX.categories;
  }

  // Metodo que devuelve la lista de usuarios
  getJsonCategories() {
    return (data as any);
  }

  click(e) {
    this.movies = [];
    this.getJsonCategories()?.default.NETFLIX.películas.forEach((peli:any) => {
      if(peli.category === e.name) {
        this.movies.push(peli);
      }
    });
    console.log(e);

  }

}
