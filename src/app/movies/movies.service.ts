import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Movie } from "./movie";

@Injectable()
export class MoviesService {
  private url: string = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "fdcd977a12ee20da2fe6ffd425012720";
  private page: number = 1;

  constructor(private http: Http) {
  }

  getMovies(paged?: number): Observable<Movie[]> {
    let page: number = 1;
    if (paged) { 
      page = paged;
    } else {
      page = 1;
    }
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=en&page=${page}`;
    return this.http.get(moviesUrl).map(this.extractData);
    //.catch(this.handleError);
  }

  getDetails(id: number) {
    let selectedMovieUrl = `${this.url}${id}?api_key=${this.apiKey}&language=en`;
    return this.http.get(selectedMovieUrl).map(res => {
      return res.json();
    });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }
}
