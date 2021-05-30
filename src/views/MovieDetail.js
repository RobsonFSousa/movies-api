import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const fetchMovie = async () => {
      const { data } = await MoviesService.getMovieById(id);
      setMovie(data);
    };
  
    useEffect(() => {
      fetchMovie();
    }, []);

    return (
        <div class="container pt-5">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-3 col-sm-5">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width="200px" />
            </div>
            <div class="col-lg-9 col-md-9 col-9 col-sm-7">
              <h1>{ movie.title }</h1>
              <article>{ movie.overview }</article>
            </div>
          </div>
        </div>
    )
}