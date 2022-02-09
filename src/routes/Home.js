import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";
import NowFetch from "../components/NowFetch";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 38px;
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <>
      {!data ? (
        <NowFetch loading={loading} error={error} />
      ) : (
        <MoviesWrapper>
          {data.movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
            />
          ))}
        </MoviesWrapper>
      )}
    </>
  );
};

export default Home;
