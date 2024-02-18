import React from "react";
import { Container, LinkDiff } from "./styles";

const Program = ({ imgURL, alt, title, description, arrayStack, projectURL}) => {
  return (
    <Container>
      <LinkDiff to={projectURL}>
        
        <div className="projectDetails">
          <img src={imgURL} alt={alt} />
          <h1 className="projectTitle">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="stackDetails">
        <h3>Stack:</h3>
        {arrayStack.map((imagem) => <img key={imagem} src={imagem}/>)}
        </div>
      </LinkDiff>
    </Container>
  );
};

export default Program;
