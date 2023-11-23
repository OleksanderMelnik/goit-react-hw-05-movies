import { useEffect, useState } from 'react';
import {getTrendingHome} from 'App/api';
import {MoviesList} from 'components/MoviesList/MoviesList';

export default function Home() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingHome('').then(setMovies);
  }, []);

    return (
    <>
    <div>Home</div>
    <MoviesList movies={movies} />
    </>
    )
}