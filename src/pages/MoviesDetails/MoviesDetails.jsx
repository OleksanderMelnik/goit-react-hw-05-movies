import { NavLink, Outlet, useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState, Suspense } from 'react';
import {getMovieById} from 'App/api';


const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const placeholder = 'https://via.placeholder.com/182x273';

export default function MoviesDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
        <Link to={backLinkHref}>Go back</Link>
        <div>
          <img src={`${movie.poster_path? POSTER_URL + movie.poster_path : placeholder + '?text=' + movie.original_title}`}
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
              <NavLink to='cast' state={location.state}>cast</NavLink>
            </li>
            <li>
              <NavLink to='reviews' state={location.state}>reviews</NavLink>
            </li>
        </ul>
        <Suspense fallback={<div>LOADING PAGE...</div>}> 
          <Outlet />
        </Suspense>
        
    </>   
    )   
}