import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'App/api';
import { ListItem, StyledList } from 'components/Cast/Cast.styled';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const placeholder = 'https://via.placeholder.com/182x273';

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
          <StyledList>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <ListItem key={id}>
                <img
                  src={`${profile_path? POSTER_URL + profile_path: placeholder + '?text=' + original_name}`}
                  alt={original_name}
                />
                <p>
                  <span> Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </ListItem>
            ))}
          </StyledList>
        }
      </>
    );
}