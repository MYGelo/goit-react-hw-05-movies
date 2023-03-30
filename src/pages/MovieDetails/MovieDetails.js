import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { genreId, movieName } = useParams();
  return (
    <div>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        MovieDetails id: {genreId} , name: {movieName}
      </p>
    </div>
  );
};
