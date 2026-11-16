/**
 * >ad. — per aspera ad astra
 * github.com/andrezon04
 *
 * Dados dos projetos. Para adicionar ou editar um projeto, mexa só aqui:
 * o card e o modal são montados a partir desta lista em js/main.js.
 *
 * areas: quais filtros mostram o projeto ("backend", "web-mobile", "testes").
 */

const PROJECTS = [
  {
    id: "emprega-co",
    featured: true,
    kind: "TCC em equipe",
    area: "Backend & mobile",
    areas: ["backend", "web-mobile"],
    title: "Emprega.Co",
    description:
      "API e aplicativo desenvolvidos em equipe. Minhas contribuições incluem fluxos de cadastro, recuperação de senha e contratos.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React Native", "Expo"],
    cta: "conhecer minha participação",
    summary:
      "Projeto desenvolvido em equipe, com uma API em Java e Spring Boot e um aplicativo em React Native e Expo.",
    items: [
      "Contribuições nos fluxos de cadastro e recuperação de senha.",
      "Participação nas funcionalidades de contratos.",
      "Integração entre aplicativo, API e persistência com PostgreSQL.",
    ],
    note: "Os repositórios são privados. A descrição e as contribuições estão documentadas no meu perfil público do GitHub.",
    link: {
      label: "ver apresentação no GitHub",
      url: "https://github.com/andrezon04/andrezon04#readme",
    },
  },
  {
    id: "api-biblioteca",
    kind: "Projeto de estudo",
    area: "Backend",
    areas: ["backend"],
    title: "API de biblioteca",
    description:
      "Usuários, carteirinhas e empréstimos. Um estudo de relacionamentos e persistência com JPA e Hibernate.",
    stack: ["Java", "Spring Boot", "MySQL"],
    summary:
      "Um estudo de modelagem de dados e persistência usando o contexto de uma biblioteca, com usuários, carteirinhas e empréstimos.",
    items: [
      "Relacionamento um para um entre usuário e carteirinha.",
      "Relacionamento muitos para um entre empréstimos e usuários.",
      "Persistência com JPA, Hibernate e MySQL em uma aplicação Spring Boot.",
    ],
    note: "Projeto de estudo. O repositório contém a implementação e as orientações de execução.",
    link: {
      label: "ver código no GitHub",
      url: "https://github.com/andrezon04/spring-boot-library-api",
    },
  },
  {
    id: "nasa-apod",
    kind: "Estudo colaborativo",
    area: "Frontend",
    areas: ["web-mobile"],
    title: "NASA APOD Explorer",
    description:
      "Uma interface para descobrir a mídia astronômica do dia. Integração com API, conteúdo dinâmico e tratamento de erros.",
    stack: ["JavaScript", "Fetch API", "HTML & CSS"],
    summary:
      "Interface para consultar a mídia astronômica do dia pela API Astronomy Picture of the Day da NASA. Desenvolvido em colaboração com Eric Reis.",
    items: [
      "Requisições com Fetch API e async/await.",
      "Exibição de imagem ou vídeo, título, data e explicação.",
      "Atualização do conteúdo pelo DOM e tratamento de falhas na interface.",
    ],
    note: "Projeto de estudo desenvolvido por André Dias e Eric Reis.",
    link: {
      label: "ver código no GitHub",
      url: "https://github.com/andrezon04/nasa-apod-explorer",
    },
  },
  {
    id: "cypress-e2e",
    kind: "Projeto de estudo",
    area: "Testes",
    areas: ["testes"],
    title: "Testes E2E com Cypress",
    description:
      "Automação de cenários de login e formulários para praticar testes de ponta a ponta.",
    stack: ["Cypress", "JavaScript"],
    summary:
      "Prática de automação de testes de ponta a ponta usando Cypress e JavaScript.",
    items: [
      "Cenários de login com dados válidos, inválidos e vazios.",
      "Validação de preenchimento de campos obrigatórios.",
      "Interações com formulários na interface.",
    ],
    note: "Os cenários ilustram o escopo de estudo. O portfólio não representa uma execução atual dos testes nem afirma cobertura total da aplicação.",
    link: {
      label: "ver código no GitHub",
      url: "https://github.com/andrezon04/4dm-cypress-e2e",
    },
  },
  {
    id: "rick-and-morty",
    kind: "Projeto de estudo",
    area: "Frontend",
    areas: ["web-mobile"],
    title: "Rick and Morty em React",
    description:
      "Personagens, origens e espécies em uma aplicação de estudo sobre componentes e consumo de APIs.",
    stack: ["React", "Axios", "Vite"],
    summary:
      "Aplicação de estudo que consome a API pública de Rick and Morty e apresenta personagens em uma interface React.",
    items: [
      "Consulta da primeira página de personagens com Axios.",
      "Apresentação de imagem, nome, espécie, status e origem.",
      "Organização da interface em componentes com React, CSS e Vite.",
    ],
    note: "O escopo publicado apresenta a primeira página de personagens. Não inclui busca, filtros ou paginação.",
    link: {
      label: "ver código no GitHub",
      url: "https://github.com/andrezon04/rick-and-morty-react",
    },
  },
];
