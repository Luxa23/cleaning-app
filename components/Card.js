import styled from 'styled-components';

export default function Card({ children }) {
  return (
    <StyledCardContainer>
      <StyledCardTitle>{children}</StyledCardTitle>
      <StyledImage></StyledImage>
      <StyledDiv></StyledDiv>
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  border: 2px solid black;
`;

const StyledCardTitle = styled.h2`
  padding: 1rem;
  flex-grow: 2;
`;

const StyledDiv = styled.div`
  width: 30px;
  height: 30px;
  margin: 2rem;
  background-color: hotpink;
  border-radius: 99px;
`;

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 2rem;
  background: lightgrey;
`;
