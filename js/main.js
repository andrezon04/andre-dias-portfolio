/**
 * >ad. — per aspera ad astra
 * github.com/andrezon04
 *
 * Monta os cards de projeto, aplica os filtros e abre o modal de detalhes.
 * Os dados vêm de PROJECTS, definido em js/projects.js.
 */

const list = document.getElementById("lista-projetos");
const count = document.getElementById("contagem");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("modal-projeto");

/**
 * Cria um elemento já com classe e texto.
 * Usar textContent (e não innerHTML) evita interpretar os dados como HTML.
 */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createCard(project) {
  const item = el("li", "card project");
  if (project.featured) item.classList.add("project--featured");

  const meta = el("p", "project__meta");
  meta.append(
    el("span", "project__kind", project.kind),
    el("span", "project__area", project.area)
  );

  const tags = el("ul", "tags");
  tags.setAttribute("aria-label", "Tecnologias");
  project.stack.forEach((tech) => tags.append(el("li", "", tech)));

  const button = el("button", "btn", `${project.cta ?? "ver detalhes"} ->`);
  button.type = "button";
  button.setAttribute("aria-haspopup", "dialog");
  button.addEventListener("click", () => openModal(project));

  item.append(
    meta,
    el("h3", "card__title", project.title),
    el("p", "card__text", project.description),
    tags,
    button
  );
  return item;
}

function render(filter) {
  const visible =
    filter === "todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.areas.includes(filter));

  list.replaceChildren(...visible.map(createCard));

  count.textContent =
    visible.length === 1
      ? "1 projeto exibido."
      : `${visible.length} projetos exibidos.`;
}

function openModal(project) {
  document.getElementById("modal-tipo").textContent =
    `${project.kind} · ${project.area}`;
  document.getElementById("modal-titulo").textContent = project.title;
  document.getElementById("modal-resumo").textContent = project.summary;
  document.getElementById("modal-nota").textContent = project.note;

  const items = document.getElementById("modal-itens");
  items.replaceChildren(...project.items.map((text) => el("li", "", text)));

  const link = document.getElementById("modal-link");
  link.href = project.link.url;
  link.textContent = `${project.link.label} ↗`;

  // showModal() cuida do foco, da tecla Esc e de bloquear o fundo.
  modal.showModal();
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((other) =>
      other.setAttribute("aria-pressed", String(other === button))
    );
    render(button.dataset.filter);
  });
});

// Clicar fora da caixa (no backdrop) fecha o modal.
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

render("todos");
