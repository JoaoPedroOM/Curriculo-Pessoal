import React from "react";
import { Container } from "./styles"

const Tecnologia = ({imgURL, altIMG}) => {
  return (
      <Container>
        <img src={imgURL} alt={altIMG} />
      </Container>
  );
};

export default Tecnologia;
