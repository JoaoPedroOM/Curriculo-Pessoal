import { Container, Main, Projects } from "./styles";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Program from "../../components/Program";

import portfolio from "../../assets/portfolio.png";
import dogs from "../../assets/dogs.png";
import notes from "../../assets/notes.png";
import carrybike from "../../assets/carrybike.png";
import contagem from "../../assets/contagem.png";
import climatempo from "../../assets/climatempo.png";
import todolist from "../../assets/todolist.png";
import empireburger from "../../assets/empireburger.png";
import guerreiros from "../../assets/GuerreirosdaAmazônia.png";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import node from "../../assets/node.svg";
import react from "../../assets/reactJS.svg";
import tailwind from "../../assets/tailwind.svg";

export function Projetos() {
  return (
    <Container>
      <Header ativo={true} />
      <Main>
        <h1>Projetos</h1>
        <p>
          Aqui você encontra alguns projetos que selecionei para mostrar minhas
          habilidades como desenvolvedor.
        </p>

        <Projects>
        <Program
            projectURL="guerreiros"
            imgURL={guerreiros}
            alt="Fundo amarelo com Logo dos Guerreiros da Amazônia no meio"
            title="Guerreiros da Amazônia"
            description="Atuei como desenvolvedor front-end no projeto Guerreiros da Amazônia, sendo responsável pela implementação do layout das telas de login e registro, além das funcionalidades essenciais de autenticação de usuários, como login, criação de conta e recuperação de senha."
            arrayStack={[react, tailwind]}
          />
          <Program
            projectURL="empireburger"
            imgURL={empireburger}
            alt="Home do site Empire Burger, destacando um banner promocional com o King Burger, menu de navegação e seções de ofertas especiais, atendimento e entrega."
            title="Empire-Burger"
            description="Empire Burger, uma hamburgueria fictícia, com foco na fidelidade ao layout e funcionalidades avançadas. Utilizando React e Tailwind CSS, implementei uma interface intuitiva."
            arrayStack={[react, tailwind]}
          />

          <Program
            projectURL="portfolio"
            imgURL={portfolio}
            alt="Home do site portfolio João Pedro. Essa página conta com um título centralizado que contem a mensagem 'Olá, meu nome é João Pedro. Eu sou um desenvolvedor de 20 anos do Brasil localizado em Peruíbe.' e logo abaixo dois botões um para download do currículo e outro para os projetos "
            title="Portfolio"
            description="Este é um portfolio desenvolvido utilizando React. Ele foi criado para exibir meus projetos, habilidades e informações pessoais de forma organizada e atraente. "
            arrayStack={[react]}
          />

          <Program
            projectURL="dogs"
            imgURL={dogs}
            alt="Home do site portfolio João Pedro. Essa página conta com um título centralizado que contem a mensagem 'Olá, meu nome é João Pedro. Eu sou um desenvolvedor de 20 anos do Brasil localizado em Peruíbe.' e logo abaixo dois botões um para download do currículo e outro para os projetos "
            title="Dogs"
            description="Desenvolvido como parte do curso de React da Origamid, oferece aos usuários a oportunidade de compartilhar fotos de seus queridos pets, interagir com outros donos de cachorros e explorar uma comunidade amigável e dedicada aos animais de estimação."
            arrayStack={[react, tailwind]}
          />

          <Program
            projectURL="carrybike"
            imgURL={carrybike}
            alt="Imagem da home do site carry bike"
            title="Carry Bike "
            description="Projeto desenvolvido durante o curso de Web Design da Origamid. Esse projeto foi 
            desenvolvido com HTML e CSS, permitindo uma ótima oportunidade para praticar habilidades 
            de design e desenvolvimento web, além de criar uma interface atraente e eficaz para um 
            negócio real."
            arrayStack={[html, css]}
          />

          <Program
            projectURL="notes"
            imgURL={notes}
            alt="Imagem da área principal do site notes, nela temos uma navbar a esquerda com três opções: Todos, Node e React. A direita da página temos uma barra de pesquisa para buscar nota e logo embaixo um título escrito 'minhas notas' com todas notas do usuário "
            title="Notes"
            description="Projeto elaborado durante a trilha Explorer do curso da Rocketseat. Esse projeto foi desenvolvido utilizando React e Node.js. Ótima oportunidade para o desenvolvimento de fundamentos do React, como React Router DOM e Styled Components, além do aprendizado sobre Node.js e Express."
            arrayStack={[react, node]}
          />

          <Program
            projectURL="contagem"
            imgURL={contagem}
            alt="Imagem da interface do site Contagem Regressiva"
            title="Contagem Regressiva"
            description="Este é um projeto que foi desenvolvido em HTML, CSS e JavaScript, que calcula o 
            tempo restante até uma data específica e exibe o resultado na tela."
            arrayStack={[html, css, js]}
          />

          <Program
            projectURL="climatempo"
            imgURL={climatempo}
            alt="Imagem da interface principal do site clima tempo"
            title="Clima Tempo Web"
            description="Projeto web simples desenvolvido para praticar o consumo de dados de uma API. O site utiliza HTML, CSS e JavaScript para criar uma interface minimalista e intuitiva."
            arrayStack={[html, css, js]}
          />

          <Program
            projectURL="todolist"
            imgURL={todolist}
            alt="Imagem com um input para digitação da tarefa que deseja adicionar a lista"
            title="To do List"
            description="To Do List, criado com HTML, CSS e JavaScript. Ele permite que você adicione tarefas, marque tarefas como concluídas e exclua tarefas. Este projeto também permite armazenar as tarefas no LocalStorage do navegador."
            arrayStack={[html, css, js]}
          />
        </Projects>
      </Main>
      <Footer />
    </Container>
  );
}
