import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  img {
    width: 96rem;
    height: 61rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  @media (max-width: 1023px) {
     img{
          width: 61rem;
          height: 39rem;
     }
  }

  @media (max-width: 640px) {
     img{
          width: 52rem;
          height: 33rem;
     }
  }

  @media (max-width: 540px) {
     img{
          width: 43rem;
          height: 27rem;
     }
  }
  @media (max-width: 450px) {
     img{
          width: 32rem;
          height: 20rem;
     }
  }

`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 2rem;
  width: 100%;

  .githubButton {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 5rem;
    color: black;
    background-color: white;
    border-radius: 0.5rem;

    &:hover {
      background-color: aliceblue;
    }
  }

  .accessProject {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: white;
    border: 0.1px solid white;
    padding: 0.8rem 5rem;
    border-radius: 0.5rem;
    background-color: transparent;

    &:hover {
      background-color: #222224;
    }
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
    gap: 3rem;
    padding: 0 10rem;

    .githubButton {
    width: 100%;
  }

  .accessProject {
    width: 100%;
  }
  }

  @media (max-width: 640px) {
     padding: 0 5rem;
  }
  @media (max-width: 380px) {
     .accessProject{
          padding: 0.8rem 1rem;
     }
  }

`;

export const SectionDesc = styled.section`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 5rem;
  color: #a7a7a7;

  h2 {
    color: white;
    font-family: "Space Grotesk", sans-serif;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.6rem;
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 1rem;
  }
  ul {
    margin-left: 3rem;

    a {
      color: #88d844;
      text-decoration: underline;
    }
  }

  @media (max-width: 1023px) {
     justify-content: center;
  }
  @media(max-width:800px){
     width: 100%;
  }
  @media (max-width: 640px) {
     padding: 0 5rem;
  }
`;
