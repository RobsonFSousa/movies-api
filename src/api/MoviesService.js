import axios from 'axios';

const API_KEY = '19333ac34acccd45b75b20d76417869d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}&language=en-US`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/now_playing'));
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}