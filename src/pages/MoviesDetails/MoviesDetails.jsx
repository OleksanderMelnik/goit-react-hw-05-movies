import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import {getMovieById} from 'App/api';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

export default function MoviesDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState('');


  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);
    return (
    <>
        <div>
          <img src={`${movie.poster_path? POSTER_URL + movie.poster_path : PLACEHOLDER + '?text=' + movie.original_title}`}
           alt={movie.original_title} />
        </div>
        <h1>{movie.original_title}</h1>
        <p>Rating: {Math.round(movie.vote_average)}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
        <h3>Additional information</h3>
        <ul>
            <li>
              <NavLink to='cast'>cast</NavLink>
            </li>
            <li>
              <NavLink to='reviews'>reviews</NavLink>
            </li>
        </ul>
        <Outlet />
    </>   
    )   
}