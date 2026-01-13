import portfolio from "../assets/portfolio.png";
import notes from "../assets/notes.png";
import carrybike from "../assets/carrybike.png";
import contagem from "../assets/contagem.png";
import climatempo from "../assets/climatempo.png";
import todolist from "../assets/todolist.png";
import dogs from "../assets/dogs.png";
import empireburger from "../assets/empireburger.png"
import guerreiros from "../assets/GuerreirosdaAmazônia.png"
import taskmanager from "../assets/taskmanager.png"
import docom from "../assets/docOM.png"
import chefHouse from "../assets/ChefHouse.png"
import squadraLogo from "../assets/squadraLogo.jpg"

export const PROJECTDATA = {
  squadra: {
    nome: "Squadra Digital — Unimed Campinas",
    descricao: [
      "Atuo como desenvolvedor front-end na Squadra Digital, alocado ao projeto da Unimed Campinas, atuando no desenvolvimento e manutenção de aplicações web em React.",
    "Trabalhando em três frentes estratégicas da Unimed Campinas — Cliente, Colaborador e Cooperado — com aplicações de alto impacto que fazem contato direto com usuários do plano de saúde, colaboradores da Unimed e médicos. Esses sistemas atendem mais de 750 mil beneficiários e são essenciais para a comunicação, acesso a serviços e experiência digital dos usuários, exigindo foco em performance, escalabilidade, organização de código e padronização de interfaces."
    ],
    imagem: squadraLogo,
    altIMG: "Projeto desenvolvido para a Unimed Campinas pela Squadra Digital",
    tecnoligas: [
      {
        tec: "React",
        link: "https://react.dev/",
      },
      {
        tec: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        tec: "Material UI",
        link: "https://mui.com/",
      },
      {
        tec: "Azure",
        link: "https://azure.microsoft.com/",
      },
      {
        tec: "Git",
        link: "https://git-scm.com/",
      },
    ],
    github: "https://github.com/JoaoPedroOM",
    view: "https://www.squadra.com.br/",
  },

  guerreiros: {
    nome: "Guerreiros da Amazônia - Triplano Games",
    descricao: [
      "Atuei como desenvolvedor front-end, responsável pela implementação do layout das telas de login e registro, além das funcionalidades essenciais de autenticação de usuários, como criação de conta e recuperação de senha.",
      "O design foi baseado no layout fornecido pela equipe de UI/UX no Figma, garantindo uma experiência visual coesa. Utilizei ReactJS para desenvolver as funcionalidades e Tailwind CSS para estilizar as interfaces, garantindo responsividade e eficiência. A integração com APIs permitiu a autenticação de usuários de forma ágil e segura.",
    ],
    features: [
      "Telas de Login e Registro: Interface de autenticação com design intuitivo e responsivo.",
      "Funcionalidades de Autenticação: Implementação das funcionalidades de login, criação de conta e recuperação de senha.",
      "Integração com API: Conexão eficiente com APIs para autenticação de usuários.",
      "Design Responsivo: Adaptado para diferentes tamanhos de tela, garantindo boa usabilidade em dispositivos móveis."
    ],
    imagem: guerreiros,
    altIMG: "Fundo amarelo com Logo dos Guerreiros da Amazônia no meio",
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
    github: "https://github.com/JoaoPedroOM",
    view: "https://github.com/JoaoPedroOM",
  },

  chefhouse: {
    nome: "Chef House",
    descricao:
    "Neste projeto utilizei Next.js e TypeScript para desenvolver a aplicação, com estilização feita com Tailwind. A autenticação de usuários foi gerida pelo Auth.js, oferecendo login seguro com contas do Google e GitHub. Para o gerenciamento de conteúdo, utilizei o Sanity, que permite a organização e atualização das receitas em tempo real, garantindo uma aplicação ágil e escalável.",
  features: [
    "É possível que os usuários compartilhem suas próprias receitas com a comunidade",
    "Os usuários podem visualizar diversas receitas e buscar inspiração para suas próximas criações",
    "Permite que os usuários se autentiquem facilmente utilizando suas contas do Google ou GitHub através do Auth.js.",
  ],
    imagem: chefHouse,
    altIMG: "Home do Chef House",
    tecnoligas: [
      {
        tec: "Next.js",
        link: "https://react.dev/",
      },
      {
        tec: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        tec: "Zod",
        link: "https://zod.dev/",
      },
      {
        tec: "Sanity",
        link: "https://www.sanity.io/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/Recipe-2.0",
    view: "https://chef-house.vercel.app/",
  },


  docom: {
    nome: "DocOM",
    descricao:
    "Neste projeto de gerenciamento de documentos, utilizei ReactJS para desenvolver a interface e Tailwind CSS para estilização. A autenticação de usuários foi realizada através do Clerk, com suporte para login via Google e GitHub, garantindo segurança e personalização no gerenciamento de acesso. Para armazenamento e sincronização de dados, usei o Convex, que possibilita a persistência e atualização em tempo real, criando uma aplicação escalável e ágil.",
  features: [
    "Permite aos usuários entrarem com suas contas do Google ou GitHub, utilizando o Clerk para gerenciamento seguro de autenticação.",
    "Criação e edição de documentos com interface intuitiva.",
    "Alteração do título dos documentos para uma melhor organização.",
    "Os documentos são armazenados no Convex, garantindo persistência e sincronização em tempo real.",
  ],
    imagem: docom,
    altIMG: "Página para gerenciar as tasks",
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
      {
        tec: "Clerk",
        link: "https://clerk.com/",
      },
      {
        tec: "Convex",
        link: "https://www.convex.dev/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/DocOM",
    view: "https://doc-om.vercel.app/",
  },

  taskmanager: {
    nome: "Task Manager",
    descricao:
    "Neste projeto de gerenciamento de tasks, utilizei o Redux Toolkit para gerenciamento de estado e o React DnD para permitir que as tarefas fossem arrastadas entre colunas, facilitando a organização e mudança de prioridades. A autenticação de usuários foi feita através do Firebase Authentication, com login via Google e GitHub, enquanto as tarefas são armazenadas no Cloud Firestore, garantindo a persistência e sincronização dos dados em tempo real. Esse conjunto de tecnologias proporcionou uma experiência de usuário interativa e uma aplicação escalável e segura.",
  features: [
    "Possibilidade de arrastar tasks para mudar sua ordem.",
    "Permite aos usuários entrarem com suas contas do Google ou GitHub, utilizando o Firebase Authentication.",
    "Capacidade de arrastar tasks entre colunas para alterar seu status ou prioridade.",
    "Edição de tasks com um clique, permitindo atualizar rapidamente as informações.",
    "Tasks são armazenadas no Cloud Firestore",
    "Exclusão de tasks com um duplo clique, proporcionando uma maneira simples de remover tasks.",
  ],
    imagem: taskmanager,
    altIMG: "Página para gerenciar as tasks",
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
        tec: "Redux Toolkit",
        link: "https://redux-toolkit.js.org/",
      },
      {
        tec: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
    github: "https://github.com/JoaoPedroOM/TaskManager",
    view: "https://task-manager-eight-amber.vercel.app/",
  },
  
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
