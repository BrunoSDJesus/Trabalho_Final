const API = "https://jsonplaceholder.typicode.com";
const ROTAS = ["users", "posts", "comments"];
const CHAVE_CACHE = "dados-jsonplaceholder";

let usuarios = [];
let posts = [];
let comentarios = [];

async function carregarDados() {
  const salvo = localStorage.getItem(CHAVE_CACHE);
  if (salvo) return JSON.parse(salvo);

  const [users, postsApi, comments] = await Promise.all(
    ROTAS.map((rota) => fetch(`${API}/${rota}`).then((resp) => resp.json()))
  );
  const dados = { users, posts: postsApi, comments };
  localStorage.setItem(CHAVE_CACHE, JSON.stringify(dados));
  return dados;
}

function fotoDoUsuario(id) {
  return `https://i.pravatar.cc/150?img=${id}`;
}

function nomeDoAutor(post) {
  const autor = usuarios.find((u) => u.id === post.userId);
  return autor ? autor.name : "Autor desconhecido";
}

function criarElemento(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

function render(listaUsuarios, listaPosts) {
  const boxUsuarios = document.getElementById("lista-usuarios");
  const gridPosts = document.getElementById("grid-posts");
  boxUsuarios.innerHTML = "";
  gridPosts.innerHTML = "";

  listaUsuarios.forEach((u) => {
    const card = criarElemento("div", "usuario");
    const foto = criarElemento("img");
    foto.src = fotoDoUsuario(u.id);
    foto.alt = `Foto de ${u.name}`;
    const info = criarElemento("div", "usuario-info");
    info.append(criarElemento("strong", "", u.name), criarElemento("span", "", u.email));
    card.append(foto, info);
    boxUsuarios.appendChild(card);
  });

  listaPosts.forEach((post) => {
    const card = criarElemento("article", "post");
    card.tabIndex = 0;
    card.append(criarElemento("h3", "", post.title), criarElemento("p", "autor", nomeDoAutor(post)));
    card.addEventListener("click", () => mostrarPost(post.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") mostrarPost(post.id);
    });
    gridPosts.appendChild(card);
  });

  document.getElementById("contador").textContent =
    `Carregados: ${usuarios.length} usuários, ${posts.length} posts e ${comentarios.length} comentários`;
}

function mostrarPost(id) {
  // TODO: achar o post pelo id e filtrar os comentários com postId igual ao id.
  // Preencher #conteudo-detalhe (post + comentários), esconder #lista e mostrar #detalhe.
}

function voltarParaLista() {
  // TODO: esconder #detalhe e mostrar #lista de novo.
}

function aplicarBusca() {
  const termo = document.getElementById("busca").value.trim().toLowerCase();
  // TODO: com filter, manter só os usuários cujo nome ou e-mail contém o termo
  // e os posts cujo id (ou autor) bate com o termo. Depois, chamar render com as listas filtradas.
  render(usuarios, posts);
}

// TODO: usar map, filter e reduce combinados em algum cálculo (ideia: total de
// comentários por post, ou média de comentários por usuário) e exibir o resultado na página.

async function iniciar() {
  try {
    const dados = await carregarDados();
    usuarios = dados.users;
    posts = dados.posts;
    comentarios = dados.comments;
    render(usuarios, posts);
    document.getElementById("busca").addEventListener("input", aplicarBusca);
    document.getElementById("voltar").addEventListener("click", voltarParaLista);
  } catch (erro) {
    console.error(erro);
    document.getElementById("contador").textContent = "Erro ao carregar os dados. Veja o console.";
  }
}

iniciar();
