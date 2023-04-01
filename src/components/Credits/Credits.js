import { searchCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const tmdb = 'https://image.tmdb.org/t/p/w500';

export const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    searchCredits(movieId).then(credit => setCredits(credit));
  }, [movieId]);

  return (
    <div>
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            <img
              src={`${tmdb}${item.img}`}
              alt=""
              height={'150px'}
              width={'100px'}
            ></img>

            <p>{item.name}</p>
            <p>Character:{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
