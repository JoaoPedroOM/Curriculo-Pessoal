import React from "react";
import { Container, Main, Buttons, SectionDesc } from "./styles";
import { Github } from 'lucide-react';
import { ArrowUpRight } from "lucide-react";

import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { PROJECTDATA } from "../../components/project-infos";

const ProjetoDetalhe = () => {
  const { projectName } = useParams();

  const projeto = PROJECTDATA[projectName];

  return (
    <Container>
      <Header ativo={false} />
      <Main>
        <div>
          <img src={projeto.imagem} alt={projeto.altIMG} />
          <Buttons>
            <a className="githubButton" href={projeto.github} target="_blank">
              <Github />
              Github
            </a>
            <a className="accessProject" href={projeto.view} target="_blank">
              <ArrowUpRight />
              Acessar projeto
            </a>
          </Buttons>
        </div>

        <SectionDesc>
          <h2>{projeto.nome}</h2>
          {Array.isArray(projeto.descricao) ? (
            <>
              <p>{projeto.descricao[0]}</p>
              <p>{projeto.descricao[1]}</p>
            </>
          ) : (
            <p>
              {projeto.descricao}
            </p>
          )}

         {projeto.features ? <ul>
          {projeto.features.map((feature) => 
            <li key={feature}>{feature}</li>
          )} 
         </ul>: null}
          <h2>Tecnologias</h2>
          {projeto.tecnoligas.map((tecnologia) => (
            <ul>
              <li key={tecnologia.tec}>
                <a href={tecnologia.link} target="_blank">
                  {tecnologia.tec}
                </a>
              </li>
            </ul>
          ))}
        </SectionDesc>
      </Main>
      <Footer />
    </Container>
  );
};

export default ProjetoDetalhe;
