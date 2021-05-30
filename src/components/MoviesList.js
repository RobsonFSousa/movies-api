import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <div class="container pt-5">
            <div class="row">
                { movies.map(movie => <MovieItem movie={ movie } />) }
            </div>
        </div>
    </section>
);