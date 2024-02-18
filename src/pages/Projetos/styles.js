import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4.8rem;
    margin: 5rem auto 4rem auto;
    font-family: "Space Grotesk", sans-serif;
    background-clip: text;
    color: transparent;
    display: inline-block;
    background-image: linear-gradient(to right, #ff512f, #dd2476);
  }

  p {
    text-align: center;
    color: #a7a7a7;
  }
`;

export const Projects = styled.section`
  width: 100%;
  margin-top: 6rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 8rem;

  @media (max-width: 1535px) {
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1300px) {
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 1095px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10rem 0 10rem;
    gap: 5rem;
  }
`;
