var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("movie", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters:[],
        execute: function() {
            Movie = (function () {
                function Movie(adult, backdrop_path, budget, genres, genre_ids, homepage, overview, id, imdb_id, original_language, original_title, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, title, tagline, video, vote_average, vote_count) {
                    this.adult = adult;
                    this.backdrop_path = backdrop_path;
                    this.budget = budget;
                    this.genres = genres;
                    this.genre_ids = genre_ids;
                    this.homepage = homepage;
                    this.overview = overview;
                    this.id = id;
                    this.imdb_id = imdb_id;
                    this.original_language = original_language;
                    this.original_title = original_title;
                    this.popularity = popularity;
                    this.poster_path = poster_path;
                    this.production_companies = production_companies;
                    this.production_countries = production_countries;
                    this.release_date = release_date;
                    this.revenue = revenue;
                    this.runtime = runtime;
                    this.spoken_languages = spoken_languages;
                    this.status = status;
                    this.title = title;
                    this.tagline = tagline;
                    this.video = video;
                    this.vote_average = vote_average;
                    this.vote_count = vote_count;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    }
});
System.register("movies.service", ["@angular/core", "@angular/http", "rxjs/add/operator/catch", "rxjs/add/operator/map"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, http_1;
    var MoviesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            MoviesService = (function () {
                function MoviesService(http) {
                    this.http = http;
                    this.url = "https://api.themoviedb.org/3/movie/";
                    this.apiKey = "fdcd977a12ee20da2fe6ffd425012720";
                    this.page = 1;
                }
                MoviesService.prototype.getMovies = function (paged) {
                    var page = 1;
                    if (paged) {
                        page = paged;
                    }
                    else {
                        page = 1;
                    }
                    var moviesUrl = this.url + "popular?api_key=" + this.apiKey + "&language=en&page=" + page;
                    return this.http.get(moviesUrl).map(this.extractData);
                    //.catch(this.handleError);
                };
                MoviesService.prototype.getDetails = function (id) {
                    var detailsUrl = "" + this.url + id + "?api_key=" + this.apiKey + "&language=en";
                    return this.http.get(detailsUrl).map(function (res) {
                        return res.json();
                    });
                };
                MoviesService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.results || {};
                };
                MoviesService.prototype.handleError = function (error) {
                    var errMsg;
                    if (error instanceof http_1.Response) {
                        var body = error.json() || "";
                        var err = body.error || JSON.stringify(body);
                        errMsg = error.status + " - " + (error.statusText || "") + " " + err;
                    }
                    else {
                        errMsg = error.message ? error.message : error.toString();
                    }
                    console.error(errMsg);
                    return console.log("Error");
                };
                MoviesService = __decorate([
                    core_1.Injectable()
                ], MoviesService);
                return MoviesService;
            }());
            exports_2("MoviesService", MoviesService);
        }
    }
});
System.register("movies.component", ["@angular/core"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2;
    var MoviesComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            MoviesComponent = (function () {
                function MoviesComponent(moviesService, router) {
                    this.moviesService = moviesService;
                    this.router = router;
                }
                MoviesComponent.prototype.ngOnInit = function () {
                    // this.language = this.moviesService.getLanguage();
                    this.getMovies();
                };
                MoviesComponent.prototype.getMovies = function () {
                    this.movies = this.moviesService.getMovies();
                };
                // dynamicSort(property) {
                //   let sortOrder = 1;
                //   if (property[0] === "-") {
                //     sortOrder = -1;
                //     property = property.substr(1);
                //   }
                //   return function(a, b) {
                //     let result =
                //       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
                //     return result * sortOrder;
                //   };
                // }
                // sortMovies(property: string) {
                //   if (property == "title") {
                //     if (this.sort == 1) {
                //       this.movies = this.movies.map(items =>
                //         items.sort(this.dynamicSort("-title"))
                //       );
                //       this.sort = -1;
                //     } else {
                //       this.movies = this.movies.map(items =>
                //         items.sort(this.dynamicSort("title"))
                //       );
                //       this.sort = 1;
                //     }
                //   } else if (property == "popularity") {
                //     if (this.sort == 2) {
                //       this.movies = this.movies.map(items =>
                //         items.sort(this.dynamicSort("-popularity"))
                //       );
                //       this.sort = -2;
                //     } else {
                //       this.movies = this.movies.map(items =>
                //         items.sort(this.dynamicSort("popularity"))
                //       );
                //       this.sort = 2;
                //     }
                //   }
                // }
                MoviesComponent.prototype.nextPage = function (page) {
                    this.movies = this.moviesService.getMovies(page);
                };
                MoviesComponent.prototype.onSelect = function (movie) {
                    // this.router.navigate(["./../movie", movie.id]);
                };
                MoviesComponent = __decorate([
                    core_2.Component({
                        selector: "app-movies",
                        templateUrl: "./movies.component.html",
                        styleUrls: ["./movies.component.css"]
                    })
                ], MoviesComponent);
                return MoviesComponent;
            }());
            exports_3("MoviesComponent", MoviesComponent);
        }
    }
});
