export const FILTER_MOVIES = 'movies/FILTER';

export function filterMovies(searchText:string) {
    return {
        type: FILTER_MOVIES,
        searchText,
    };
}