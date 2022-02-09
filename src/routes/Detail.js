import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });

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
  if (data) return <div>{data.movie.title}</div>;
};

export default Detail;
