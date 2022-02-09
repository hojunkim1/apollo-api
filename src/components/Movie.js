import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const Movie = ({ id, title, poster }) => {
  return (
    <Link to={`${id}`}>
      <Wrapper key={id}>
        <img src={poster} alt={title} />
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  );
};

export default Movie;
