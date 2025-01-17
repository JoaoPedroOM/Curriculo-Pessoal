import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding-top: 16%;
  padding-bottom: 35%;
  margin: 0 auto;

  h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 6.4rem;
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
.curriculo{
  display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem;
    background-color: #fff;
    color: #000;
    border-radius: 0.5rem;

    &:hover {
      background-color: #e7e7e7;
    }
}
  

  h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 2rem;
    color: #d3d8df;
    font-weight: 500;
  }
  .detail {
    color: #fff;
    text-decoration: underline;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
 
  @media (max-width: 870px) {
    h1 {
      font-size: 4.8rem;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 3.6rem;
      text-align: center;
    }
    h3 {
      font-size: 1.8rem;
      line-height: 2.8rem;
      text-align: center;
    }
    > div {
      flex-direction: column;
      width: 90%;
    }
  }
`;


export const LinkProject = styled(Link)`
    padding: 0.8rem 3.2rem;
    background: transparent;
    border-radius: 0.5rem;
    border-image-repeat: no-repeat;
    border: 1px solid #00896f;
    color: #fff;
    transition: color 0.5s, background-color 0.3s;

    &:hover {
      color: #000;
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
      border: 1px solid #00896f;
    }
`

export const Sobre = styled.section`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 50%;
  margin-bottom: 10rem;

  h3 {
    font-family: "Space Grotesk", sans-serif;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    font-size: 4.8rem;

    background-image: linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb);
  }
  .detail {
    color: #fff;
    text-decoration: underline;
  }
  > div {
    border-left: 3px solid #fff;
    padding-left: 2rem;
    span {
      font-family: "Space Grotesk", sans-serif;
      font-size: 1.8rem;
      font-style: italic;
      line-height: 2.8rem;
      color: #a7a7a7;
    }
  }

  @media (max-width: 870px) {
    margin: 0 auto 10rem auto;
    width: 80%;
    align-items: center;
    justify-content: center;

    h3 {
      text-align: center;
    }

    > div {
      span {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.8rem;
        color: #a7a7a7;
      }
    }
  }
`;
export const Tecnologias = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 10rem;

  h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 4.8rem;
    background-image: linear-gradient(to right, #1488cc, #2b32b2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  > div {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    grid-template-columns: repeat(8, 1fr);
  }

  @media (max-width: 870px) {
    justify-content: center;
    align-items: center;
    > div {
      gap: 10rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 400px) {
    > div {
      gap: 6rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Contato = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;

  h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 3rem;
    background-clip: text;
    color: transparent;
    display: inline-block;
    background-image: linear-gradient(to right, #ff512f, #dd2476);
  }

  p {
    font-family: "Space Grotesk", sans-serif;
    color: #a7a7a7;
  }
  > div {
    display: flex;
    align-items: center;
    border: 0.1px solid white;
    padding: 0.4rem 2rem;
    border-radius: 0.5rem;

    p,
    a {
      color: white;
      cursor: pointer;
    }
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  @media (max-width: 510px) {
    text-align: center;
  }
`;
