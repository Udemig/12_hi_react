import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import api from "../../../utils";
import imageUrl from "../../../constants";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const params = { with_genres: genre.id };

    api.get("/discover/movie", params).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-3xl mb-3 font-semibold">{genre.name} </h1>
      <Splide
        options={{
          autoWidth: true,
          gap: "20px",
          pagination: false,
          type: "loop",
        }}
      >
        {movies?.map((movie, key) => (
          <SplideSlide key={key}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.05]"
                src={imageUrl + movie.poster_path}
                alt="Image 1"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
