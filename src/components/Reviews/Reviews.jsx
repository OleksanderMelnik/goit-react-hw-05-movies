import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'App/api';
import { ListItem, StyledList, ReviewsDescr } from '../Reviews/Reviews.styled';

export default function Reviews() {
    
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsMovie = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsMovie();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};