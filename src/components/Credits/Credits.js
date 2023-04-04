import { searchCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const tmdb = 'https://image.tmdb.org/t/p/w500';

export default function Credits() {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    searchCredits(movieId).then(credit => setCredits(credit));
  }, [movieId]);

  const q = credits.map(item => item.img);
  const w = q ? `hello` : `hello2`;

  console.log(w);

  return (
    <div>
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            <img
              // {item.img ? (dsdf) : (dsa)}
              src={`${tmdb}${item.img}`}
              // src={'https://via.placeholder.com/150x100'}
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
