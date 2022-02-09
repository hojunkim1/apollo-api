import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import NowFetch from "../components/NowFetch";

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

  return (
    <>
      {!data ? (
        <NowFetch loading={loading} error={error} />
      ) : (
        <div>{data.movie.title}</div>
      )}
    </>
  );
};

export default Detail;
