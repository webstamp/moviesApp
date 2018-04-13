import { Movie } from '../movies/movie';
import { IAppState} from './IAppState';
import { FILTER_MOVIES } from './action';

const movies = [
    {
     adult: false,
     backdrop_path: "",
     budget: 100,
     genres: [{
      id: 12,
      name: "Love"
    }],
     genre_ids: 2,
     homepage: "http://www.webstamp.gr",
     overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
     id: 337167,
     imdb_id: "1222",
     original_language: "en",
     original_title: "Fifty Shades of Grey",
     popularity: 529.25,
     poster_path: "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
     production_companies: [{
      id: 3,
      name: "FOX"
    }],
     production_countries: [{
      iso_3166_1: "something",
      name: "ISO"
    }],
     release_date: "14042018",
     revenue: 1,
     runtime: 2,
     spoken_languages: [{
      iso_3166_1: "something",
      name: "LANG"
    }],
     status: "live",
     title: "Fifty Shades Freed",
     tagline: "none",
     video: false,
     vote_average: 6.1,
     vote_count: 1000
    }
]

const initialState: IAppState = {
    movies,
    filteredMovies: movies
}

// function filterMovies(state, action): IAppState {
//     return Object.assign({}, state, {
//         filteredMovies: state.movies.filter(c => {
//             console.log('Title: ', c.title);
//             console.log('Action', action.searchText);
//             c.title.indexOf(action.searchText) > -1;
//         }),
//     })
// }

// export function reducer (state = initialState , action){
//     switch(action.type){
//         case FILTER_MOVIES:
//         return filterMovies(state, action);
//         default:
        
//     }
//     return state;
// }