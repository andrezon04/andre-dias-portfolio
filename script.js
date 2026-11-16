"use strict";

/** @typedef {{title:string,kind:string,summary:string,details:string[],note:string,url:string,linkLabel:string}} Project */
/** @type {Record<string, Project>} */
const projects = {
  emprega: {
    title: "Emprega.Co",
    kind: "TCC em equipe · Backend e mobile",
    summary:
      "Projeto desenvolvido em equipe, com uma API em Java e Spring Boot e um aplicativo em React Native e Expo.",
    details: [
      "Contribuições nos fluxos de cadastro e recuperação de senha.",
      "Participação nas funcionalidades de contratos.",
      "Integração entre aplicativo, API e persistência com PostgreSQL.",
    ],
    note: "Os repositórios são privados. A descrição e as contribuições estão documentadas no meu perfil público do GitHub. A ilustração do portfólio é uma composição visual, não uma captura do aplicativo.",
    url: "https://github.com/andrezon04/andrezon04#readme",
    linkLabel: "Ver apresentação no GitHub",
  },
  library: {
    title: "API de biblioteca",
    kind: "Projeto de estudo · Backend",
    summary:
      "Um estudo de modelagem de dados e persistência usando o contexto de uma biblioteca, com usuários, carteirinhas e empréstimos.",
    details: [
      "Relacionamento um para um entre usuário e carteirinha.",
      "Relacionamento muitos para um entre empréstimos e usuários.",
      "Persistência com JPA, Hibernate e MySQL em uma aplicação Spring Boot.",
    ],
    note: "Projeto de estudo. O repositório contém a implementação e as orientações de execução.",
    url: "https://github.com/andrezon04/spring-boot-library-api",
    linkLabel: "Ver código no GitHub",
  },
  nasa: {
    title: "NASA APOD Explorer",
    kind: "Estudo colaborativo · Frontend",
    summary:
      "Interface para consultar a mídia astronômica do dia pela API Astronomy Picture of the Day da NASA. Desenvolvido em colaboração com Eric Reis.",
    details: [
      "Requisições com Fetch API e async/await.",
      "Exibição de imagem ou vídeo, título, data e explicação.",
      "Atualização do conteúdo pelo DOM e tratamento de falhas na interface.",
    ],
    note: "Projeto de estudo desenvolvido por André Dias e Eric Reis. A imagem no cartão é uma ilustração, não uma captura da aplicação.",
    url: "https://github.com/andrezon04/nasa-apod-explorer",
    linkLabel: "Ver código no GitHub",
  },
  cypress: {
    title: "Testes E2E com Cypress",
    kind: "Projeto de estudo · Qualidade",
    summary:
      "Prática de automação de testes de ponta a ponta usando Cypress e JavaScript.",
    details: [
      "Cenários de login com dados válidos, inválidos e vazios.",
      "Validação de preenchimento de campos obrigatórios.",
      "Interações com formulários na interface.",
    ],
    note: "Os cenários ilustram o escopo de estudo. O portfólio não representa uma execução atual dos testes nem afirma cobertura total da aplicação.",
    url: "https://github.com/andrezon04/4dm-cypress-e2e",
    linkLabel: "Ver código no GitHub",
  },
  rick: {
    title: "Rick and Morty em React",
    kind: "Projeto de estudo · Frontend",
    summary:
      "Aplicação de estudo que consome a API pública de Rick and Morty e apresenta personagens em uma interface React.",
    details: [
      "Consulta da primeira página de personagens com Axios.",
      "Apresentação de imagem, nome, espécie, status e origem.",
      "Organização da interface em componentes com React, CSS e Vite.",
    ],
    note: "O escopo publicado apresenta a primeira página de personagens. Não inclui busca, filtros ou paginação.",
    url: "https://github.com/andrezon04/rick-and-morty-react",
    linkLabel: "Ver código no GitHub",
  },
};

const filters = document.querySelectorAll("button[data-filter]");
const cards = document.querySelectorAll("article[data-category]");
const filterStatus = document.querySelector("#filter-status");
for (const filter of filters) {
  filter.addEventListener("click", () => {
    const category = filter.getAttribute("data-filter");
    let count = 0;
    for (const card of cards) {
      if (!(card instanceof HTMLElement)) continue;
      const visible =
        category === "all" ||
        (card.dataset.category || "").split(" ").includes(category || "");
      card.hidden = !visible;
      if (visible) count += 1;
    }
    for (const button of filters)
      button.setAttribute("aria-pressed", String(button === filter));
    if (filterStatus)
      filterStatus.textContent = `${count} ${count === 1 ? "projeto exibido" : "projetos exibidos"}.`;
  });
}

const dialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogKind = document.querySelector("#dialog-kind");
const dialogSummary = document.querySelector("#dialog-summary");
const dialogDetails = document.querySelector("#dialog-details");
const dialogNote = document.querySelector("#dialog-note");
const dialogSource = document.querySelector("#dialog-source");
/** @type {Element | null} */
let lastFocusedElement = null;

for (const trigger of document.querySelectorAll("button[data-project]")) {
  trigger.addEventListener("click", () => {
    const project = projects[trigger.getAttribute("data-project") || ""];
    if (
      !project ||
      !(dialog instanceof HTMLDialogElement) ||
      !dialogTitle ||
      !dialogKind ||
      !dialogSummary ||
      !dialogDetails ||
      !dialogNote ||
      !(dialogSource instanceof HTMLAnchorElement)
    ) {
      console.error("Não foi possível encontrar os detalhes do projeto.");
      return;
    }
    dialogTitle.textContent = project.title;
    dialogKind.textContent = project.kind;
    dialogSummary.textContent = project.summary;
    dialogNote.textContent = project.note;
    dialogDetails.replaceChildren(
      ...project.details.map((detail) => {
        const item = document.createElement("li");
        item.textContent = detail;
        return item;
      }),
    );
    dialogSource.href = project.url;
    dialogSource.textContent = `${project.linkLabel} ↗`;
    lastFocusedElement = document.activeElement;
    dialog.showModal();
  });
}

if (dialog instanceof HTMLDialogElement) {
  document
    .querySelector(".dialog-close")
    ?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  });
}

const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");
if (copyButton instanceof HTMLButtonElement && copyStatus) {
  copyButton.addEventListener("click", async () => {
    copyButton.disabled = true;
    try {
      await navigator.clipboard.writeText("andredias.jobs@gmail.com");
      copyStatus.textContent = "E-mail copiado!";
    } catch (error) {
      copyStatus.textContent =
        "Selecione o endereço acima para copiar ou clique nele para enviar um e-mail.";
      console.warn(
        "A cópia do e-mail não foi autorizada pelo navegador.",
        error instanceof Error ? error.name : "ClipboardError",
      );
    } finally {
      copyButton.disabled = false;
    }
  });
}

// Tema claro/noturno.
// O tema inicial é definido por um script no <head> do index.html, antes de
// a página aparecer. Aqui fica só o botão que alterna e guarda a escolha.
const themeToggle = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

/** @param {string} theme "dark" ou "light" */
function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeColor?.setAttribute("content", isDark ? "#1a1b26" : "#263de8");
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Ativar modo claro" : "Ativar modo noturno",
    );
  }
}

applyTheme(document.documentElement.dataset.theme || "light");

themeToggle?.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (error) {
    // Sem acesso ao localStorage o tema ainda muda, só não fica salvo.
  }
});
