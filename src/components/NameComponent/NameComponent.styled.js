import styled from 'styled-components';

export const Title = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    background-image: linear-gradient(90deg, blue, yellow);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 50px;
  }
`;
