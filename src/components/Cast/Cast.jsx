import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'App/api';
import { ListItem, StyledList } from './Cast.styled';
import {POSTER_URL, placeholder} from 'App/Constants';

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