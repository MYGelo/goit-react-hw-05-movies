import { searchCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Credits() {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    searchCredits(movieId).then(credit => setCredits(credit));
  }, [movieId]);
  const tmdb = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            <img
              src={
                item.img
                  ? `${tmdb}${item.img}`
                  : `https://via.placeholder.com/150x100`
              }
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
}
