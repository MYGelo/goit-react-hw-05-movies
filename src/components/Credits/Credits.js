import { searchCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const tmdb = 'https://image.tmdb.org/t/p/w500';

export const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  console.log(`credits`, credits);

  useEffect(() => {
    searchCredits(movieId).then(credit => setCredits(credit));
  }, [movieId]);

  return (
    <div>
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            <img src={`${tmdb}${item.img}`} alt="" width={'150px'}></img>
            <p>{item.name}</p>
            <p>Character:{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
