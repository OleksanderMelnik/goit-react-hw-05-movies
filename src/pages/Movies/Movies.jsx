import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {getSearchMovies} from 'App/api';
import {Form} from 'components/Form/Form';
import {MoviesList} from 'components/MoviesList/MoviesList'

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) return;
    
        const fetchSearchMovie = async () => {
          try {
            const searchMovies = await getSearchMovies(currentQuery);
            setMovies(searchMovies);
          } catch (e) {
            console.log(e);
          }
        };
        fetchSearchMovie();
      }, [searchParams]);

    return (
    <>
    <div>Movies</div>
    <Form setSearchParams={setSearchParams} />
    <MoviesList movies={movies} />
    </>
    )
}