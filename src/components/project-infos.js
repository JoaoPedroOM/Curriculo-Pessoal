import portfolio from "../assets/portfolio.png";
import notes from "../assets/notes.png";
import carrybike from "../assets/carrybike.png";
import contagem from "../assets/contagem.png";
import climatempo from "../assets/climatempo.png";
import todolist from "../assets/todolist.png";
import dogs from "../assets/dogs.png";
import empireburger from "../assets/empireburger.png"

export const PROJECTDATA = {
  empireburger: {
    nome: "Empire-Burguer 🍔",
    descricao:
      ["O Empire Burger é uma landing page desenvolvida para uma hamburgueria fictícia, utilizando ReactJS e Tailwind CSS, com o design baseado em um protótipo do Figma feito pelo designer Tiago Alves. O projeto se destaca pela sua navegação intuitiva, incluindo links que direcionam para seções específicas e um carrossel funcional para depoimentos de clientes. A responsividade é garantida, adaptando-se perfeitamente a diferentes tamanhos de tela, e a navegação móvel é eficiente.",
      "O projeto consome dados de uma API para renderizar dinamicamente a lista de itens do cardápio e depoimentos. Durante o desenvolvimento, foram adquiridos aprendizados valiosos em integração de API, design responsivo e organização de código. Para clonar e executar a aplicação, basta seguir os passos de instalação descritos no repositório."],
    imagem: empireburger,
    altIMG: "Home do Empire-Burger",
    tecnoligas: [
      {
        tec: "React",
        link: "https://react.dev/",
      },
      {
        tec: "Vite",
        link: "https://vitejs.dev/",
      },
      {
        tec: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/Empire-Burguer",
    view: "https://empire-burguer-snowy.vercel.app/",
  },

  portfolio: {
    nome: "Portfolio",
    descricao:
      "Este é um portfolio desenvolvido utilizando React. Ele foi criado para exibir meus projetos, habilidades e informações pessoais de forma organizada e atraente. ",
    imagem: portfolio,
    altIMG: "Home do portfolio",
    tecnoligas: [
      {
        tec: "React",
        link: "https://react.dev/",
      },
      {
        tec: "Vite",
        link: "https://vitejs.dev/",
      },
      {
        tec: "Styled-Components",
        link: "https://styled-components.com/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/Curriculo-Pessoal",
    view: "https://portfolio-joao-pedro.vercel.app/",
  },

  dogs: {
    nome: "Dogs 🐾",
    descricao:
      [
        "O Dogs é uma rede social dedicada aos cachorros, desenvolvida como parte do curso de React da Origamid. Oferece aos usuários a oportunidade de compartilhar fotos de seus pets, interagir com outros donos de cachorros e explorar uma comunidade amigável e dedicada aos animais de estimação. Utilizando tecnologias como React, React Router, React Hook Form, Tailwind CSS e Victory, o projeto integra uma API externa para gerenciamento de usuários, fotos e interações na plataforma.",
        "Durante o desenvolvimento deste projeto, foram adquiridos diversos aprendizados sobre o desenvolvimento de aplicações web com React. Entre os desafios enfrentados estão o gerenciamento de estado da aplicação, a estilização eficiente com Tailwind CSS e a integração com uma API",
      ],
    imagem: dogs,
    altIMG: "Home da rede social dogs",
    tecnoligas: [
      {
        tec: "React",
        link: "https://react.dev/",
      },
      {
        tec: "Vite",
        link: "https://vitejs.dev/",
      },
      {
        tec: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/Dogs-Origamid",
    view: "https://dogs-origamid-theta.vercel.app/",
  },


  notes: {
    nome: "Notes",
    descricao:
      "Projeto elaborado durante a trilha Explorer do curso da Rocketseat. Esse projeto foi desenvolvido utilizando React e Node.js. Ótima oportunidade para o desenvolvimento de fundamentos do React, como React Router DOM e Styled Components, além do aprendizado sobre Node.js e Express.",
    imagem: notes,
    altIMG: "Home notes",
    tecnoligas: [
      {
        tec: "React",
        link: "https://react.dev/",
      },
      {
        tec: "Vite",
        link: "https://vitejs.dev/",
      },
      {
        tec: "Styled-Components",
        link: "https://styled-components.com/",
      },
      {
        tec: "Node",
        link: "https://nodejs.org/en",
      },
      {
        tec: "Express",
        link: "https://expressjs.com/pt-br/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/Notes",
    view: "https://github.com/JoaoPedroOM/Notes",
  },

  carrybike: {
    nome: "Carry Bike",
    descricao: [
      "A página foi criada com HTML e CSS para que você possa navegar facilmente e encontrar as informações que precisa. O menu de navegação no topo da página permite acessar rapidamente as diferentes seções da loja, incluindo bicicletas, seguros e como entrar em contato conosco.",
      "Na seção de bicicletas, você pode conferir nossos modelos em destaque com imagens, preços e a opção de compra. Também temos outras categorias de bicicletas que podem ser encontradas em nosso menu de navegação.",
    ],
    imagem: carrybike,
    altIMG: "Home do site carry bike",
    tecnoligas: [
      {
        tec: "Html5",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      },
      {
        tec: "Css",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      },
    ],
    github: "https://github.com/JoaoPedroOM/bikcraft",
    view: "https://carrybike.vercel.app/",
  },

  contagem: {
    nome: "Contagem Regressiva",
    descricao: [
      "O contador de datas regressivo apresenta um input do tipo date que permite selecionar a data final da contagem regressiva através de um calendário, tornando a seleção da data muito fácil e intuitiva.",
      "Além disso, o usuário também tem a opção de selecionar uma data de contagem regressiva pré-definida, clicando nos botões 'Ano Novo' ou 'Natal' que estão presentes na parte inferior da página. A contagem regressiva é apresentada em dias, horas, minutos e segundos.",
    ],
    imagem: contagem,
    altIMG: "Interface da página contagem regressiva",
    tecnoligas: [
      {
        tec: "Html5",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      },
      {
        tec: "Css",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      },
      {
        tec: "JavaScript",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
    ],
    github: "https://github.com/JoaoPedroOM/timer",
    view: "https://timer-gamma-vert.vercel.app/",
  },

  climatempo: {
    nome: "Clima Tempo",
    descricao:
      "Este repositório contém um projeto web simples desenvolvido para praticar o consumo de dados de uma API. O site utiliza HTML, CSS e JavaScript para criar uma interface minimalista e intuitiva.",
    features: [
      "Consumo de API: Demonstração prática de como realizar solicitações a uma API externa.",
      "Exibição de Dados: Apresentação clara e organizada dos dados da API na interface do site.",
      "Interatividade: Interação do usuário através de uma interface amigável e responsiva.",
    ],
    imagem: climatempo,
    altIMG: "Interface da página clima tempo",
    tecnoligas: [
      {
        tec: "Html5",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      },
      {
        tec: "Css",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      },
      {
        tec: "JavaScript",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
    ],
    github: "https://github.com/JoaoPedroOM/Clima-Tempo",
    view: "https://clima-tempo-nine.vercel.app/",
  },

  todolist: {
    nome: "To Do List",
    descricao: [
      "To Do List, criado com HTML, CSS e JavaScript. Ele permite que você adicione tarefas, marque tarefas como concluídas e exclua tarefas. Este projeto também permite armazenar as tarefas no LocalStorage do navegador.",
      "Quando o usuário adiciona uma nova tarefa, ela é armazenada no LocalStorage e será exibida quando o usuário abrir a página novamente. Isso significa que as tarefas não serão perdidas mesmo depois de fechar o navegador ou atualizar a página.",
    ],
    imagem: todolist,
    altIMG: "Home da aplicação to do list",
    tecnoligas: [
      {
        tec: "Html5",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      },
      {
        tec: "Css",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      },
      {
        tec: "JavaScript",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
    ],
    github: "https://github.com/JoaoPedroOM/ToDoListJS",
    view: "https://todolistjs-alpha.vercel.app/",
  },
};
