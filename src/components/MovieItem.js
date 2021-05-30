import { Link } from "react-router-dom";

export const MovieItem = ({ movie }) => (
    <div class="col">
        <Link to={`movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="rounded float-start d-block" alt="..." width="200px"/>
        </Link>
        <p class="fs-5">{ movie.title }</p>
        <p></p>
    </div>
);