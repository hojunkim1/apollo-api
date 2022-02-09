import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading)
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.message}>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.message}>Error :(</h1>
      </div>
    );
  if (data)
    return (
      <div className={styles.moviesWrapper}>
        {data.movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
    );
};

export default Home;
