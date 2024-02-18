import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  filter: grayscale(1);
  transition: .3s;

  &:hover {
    background-color: #222224;
    border-radius: 0.5rem;
    filter: grayscale(0);
  }

  @media (max-width: 1023px) {
    background-color: #222224;
    border-radius: 0.5rem;
    filter: grayscale(0);
  }
`;

export const LinkDiff = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .projectDetails {
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
    p {
      text-align: left;
      height: 15rem;
    }
    h1 {
      margin: 0;
      margin-bottom: 1.5rem;
      color: white;
      font-size: 2.4rem;
    }
    img {
      width: 45rem;
      height: 30rem;
      margin-bottom: 3rem;
      border-radius: .5rem;
    }

    @media (max-width: 1535px) {
      margin-bottom: 3rem;
      img {
        width: 55.9rem;
        height: 35.8rem;
      }
    }

    @media (max-width: 1300px) {
      p {
        width: 48rem;
      }
      img {
        width: 47rem;
        height: 30rem;
      }
    }
    @media (max-width: 1095px) {
      p {
        width: 58rem;
        height: 20%;
      }
      img {
        width: 57.8rem;
        height: 37rem;
      }
    }
    @media (max-width: 645px) {
      p {
        width: 48rem;
      }
      img {
        width: 48rem;
        height: 31rem;
      }
    }
    @media (max-width: 540px) {
      p {
        width: 40rem;
      }
      img {
        width: 40rem;
        height: 25rem;
      }
    }
    @media (max-width: 460px) {
      p {
        width: 33rem;
      }
      img {
        width: 33rem;
        height: 21rem;
      }
    }
    @media (max-width: 390px) {
      p {
        width: 27rem;
      }
      img {
        width: 27rem;
        height: 18rem;
      }
    }
  }

  .stackDetails {
    display: flex;
    gap: 1rem;

    h3 {
      color: white;
      font-family: "Space Grotesk", sans-serif;
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
