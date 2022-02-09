import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

const Movie = ({ id, title, poster }) => {
  return (
    <Link to={`${id}`}>
      <div key={id} className={styles.movie}>
        <img src={poster} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default Movie;
