import { Link } from "react-router-dom";
import { Container, Main, Sobre, Tecnologias, Contato, LinkProject} from "./styles";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer"
import { Download } from 'lucide-react';
import downloadPDF from "../../../download/João Pedro Oliveira Curriculo.pdf"


import git from "../../assets/git.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import typescript from "../../assets/typescript.svg";
import reactJS from "../../assets/reactJS.svg";
import tailwind from "../../assets/tailwind.svg"
import nextjs from "../../assets/nextjs.svg"

import Tecnologia from "../../components/Tecnologia";

export function Home() {
  return (
    <Container>
      <Header ativo={false}/>
      <Main>
        <h1>Olá, meu nome é João Pedro</h1>
        <h3>
          Eu sou um desenvolvedor de 21 anos do Brasil localizado em{" "}
          <a className="detail" href="https://www.google.com/search?q=Peruíbe">
            Peruíbe.
          </a>
        </h3>

        <div>
          <a className="curriculo" href={downloadPDF} download>
          <Download /> Acessar currículo</a>

          <LinkProject  to="/projetos">
            Projetos
          </LinkProject>
        </div>
      </Main>

      <Sobre>
        <h3>Sobre</h3>
        <div>
          <blockquote>
            <span>
              Graduando em Sistemas de Informação pela{" "}
              <a className="detail" href="https://unisanta.br/" target="_blank">
                Universidade Santa Cecília
              </a>{" "}
              desde 2022 (7o. semestre). Foco em desenvolvimento web front-end,
              especificamente no desenvolvimento de aplicações escaláveis e
              performáticas, fornecendo uma boa experiência ao usuário, além de
              realizar otimizações/melhorias em aplicativos web já
              desenvolvidos.
            </span>
          </blockquote>
        </div>
      </Sobre>

      <Tecnologias>
        <h3>Tecnologias</h3>
        <div>
          <Tecnologia imgURL={html} altIMG="Logo do HTML5" />
          <Tecnologia imgURL={css} altIMG="Logo do CSS" />
          <Tecnologia imgURL={reactJS} altIMG="Logo do React" />
          <Tecnologia imgURL={nextjs} altIMG="Logo do Next.js" />
          <Tecnologia imgURL={tailwind} altIMG="Logo do Tailwind" />
          <Tecnologia imgURL={js} altIMG="Logo do JavaScript" />
          <Tecnologia imgURL={typescript} altIMG="Logo do TypeScript" />
          <Tecnologia imgURL={git} altIMG="Logo do Node" />
        </div>
      </Tecnologias>

      <Contato>
        <h3>Interessado em trabalhar junto ? </h3>
        <p>Envie-me um e-mail e vamos discutir as suas ideias.</p>
        <div>
          <a href="mailto:joaopedroolive@hotmail.com">
            <p>joaopedroolive@hotmail.com</p>
          </a>
        </div>
      </Contato>
    <Footer/>
    </Container>
  );
}
