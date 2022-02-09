import styled from "styled-components";

const MessageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const NowFetch = ({ loading, error }) => {
  if (loading)
    return (
      <MessageWrapper>
        <Message>Loading...</Message>
      </MessageWrapper>
    );
  if (error)
    return (
      <MessageWrapper>
        <Message>Error :(</Message>
      </MessageWrapper>
    );
};

export default NowFetch;
