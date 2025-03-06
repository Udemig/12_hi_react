import { useEffect, useState } from "react";
import Hero from "./Hero";
import api from "../../utils";
import MovieList from "./MovieList";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/genre/movie/list?language=tr`) //
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Genres */}

      {error ? (
        <Error info={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        <div>
          {genres.map((i) => (
            <MovieList key={i.id} genre={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
