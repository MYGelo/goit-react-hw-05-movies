import { searchCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  console.log(`credits`, credits);

  useEffect(() => {
    searchCredits(movieId).then(credit => setCredits(credit));
  }, [movieId]);

  return (
    <div>
      <p>Credits Film:</p>
    </div>
  );
};
