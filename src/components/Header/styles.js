import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: #d3d8df;
  padding: 0.8rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #222224;
  }

  span {
    display: inline-block;
    height: 0.1rem;
    width: 2rem;
    background-color: white;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  h3 {
    font-size: 2rem;
    background-image: linear-gradient(
      to right,
      #00896f,
      #2c926c,
      #479b67,
      #60a463,
      #78ac5e,
      #7fab58,
      #85a952,
      #8ca84c,
      #829e43,
      #789439,
      #6e8b30,
      #648126
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  span {
    color: #00d9ff;
  }
`;
