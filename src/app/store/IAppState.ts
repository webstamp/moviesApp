import { Movie} from '../movies/movie';
import { Observable } from 'rxjs/Observable';
import { results } from './model';

export interface IAppState {
    movies: Movie[],
    filteredMovies: Movie[]
}