import { NavLink, Outlet, useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState, Suspense } from 'react';
import {getMovieById} from 'App/api';
import { FilmWrapper, StyledList, ListItem, FilmImg, FilmTitle, FilmDescr, GoBackLink, FilmSubTitle, StyledListDescr } from 'components/MoviesList/MoviesList.styled';

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
      <GoBackLink>
        <Link to={backLinkHref}>Go back</Link>
      </GoBackLink>
        <FilmWrapper>
          <FilmImg src={`${movie.poster_path? POSTER_URL + movie.poster_path : placeholder + '?text=' + movie.original_title}`}
           alt={movie.original_title} />
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescr>{movie.overview}</FilmDescr>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDescr>
              {movie.genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </StyledListDescr>
        </div>   
        </FilmWrapper>      
        <div>
        <h2>Additional information</h2>
        <StyledList>
            <ListItem>
              <NavLink to='cast' state={location.state}>cast</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='reviews' state={location.state}>reviews</NavLink>
            </ListItem>
        </StyledList>
        <Suspense fallback={<div>LOADING PAGE...</div>}> 
          <Outlet />
        </Suspense>
        </div>       
    </>   
    )   
}