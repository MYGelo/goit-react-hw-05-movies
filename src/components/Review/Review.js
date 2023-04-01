import { getReviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }

  if (reviews.length > 0) {
    return (
      <div>
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <div>
                <h3>Author: {item.author}</h3>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
