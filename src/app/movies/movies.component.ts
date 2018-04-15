import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MoviesService } from "./movies.service";
import { Movie } from "./movie";
// import { store } from "../store/store";
import { IAppState } from "../store/IAppState";
import { NgRedux, select } from '@angular-redux/store';
import { filterMovies} from '../store/action';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit {
// @select('filteredMovies') filteredMovies$: Observable<Movie[]>
searchTextValue: string = "";
  movies: Observable<Movie[]>;
  allMovies: Movie[]
  sort: number;
  pages: number;
  constructor(
    private moviesService: MoviesService, 
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.getMovies();
    this.updateStatus();
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
    this.movies.subscribe(result => this.allMovies = result as Movie[]);  
  }

  filterChange() {
    console.log('Text : ' , this.searchTextValue)
    // store.dispatch(filterMovies(this.searchTextValue));
    this.updateStatus();
  }



  updateStatus(){
    // const allState = store.getState();
    // this.allMovies = allState.movies;
    console.log('ALL', this.allMovies)
  } 
 
  nextPage(page: number) {
    this.movies = this.moviesService.getMovies(page);
    this.movies.subscribe(result => this.allMovies = result as Movie[]); 
  }

}