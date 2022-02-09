import { gql, useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";

const GET_MOVIES = gql`
  query {
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
          <div key={movie.id} className={styles.movie}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    );
};

export default Home;
