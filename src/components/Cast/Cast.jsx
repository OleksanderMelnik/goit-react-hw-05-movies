import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'App/api';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

export default function Cast() {

    const{ movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCastMovie = async() => {
            try {
                const cast = await getCastMovie(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCastMovie();
    }, [movieId]);

    return (
        <>
        {
          <ul>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <li key={id}>
                <img
                  src={`${profile_path? POSTER_URL + profile_path: PLACEHOLDER + '?text=' + original_name}`}
                  alt={original_name}
                />
                <p>
                  <span> Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </li>
            ))}
          </ul>
        }
      </>
    );
}