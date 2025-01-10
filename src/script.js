function updateProductImage() {
  const color = document.getElementById("color").value;
  const image = document.getElementById("product-image");
  if (color === "marrom") {
      image.src = "imagens/highMarrom.jpg";
  } else if (color === "preta") {
      image.src = "imagens/highPreta.jpg";
  } else if (color === "branca") {
      image.src = "imagens/then.jpg";
  }
}

function addToCart() {
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  if (!size || !color) {
      alert("Por favor, selecione o tamanho e a cor.");
      return;
  }
  const product = {
      name: "Camiseta Estilosa",
      price: 49.90,
      size: size,
      color: color
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(produto) {
  // Obtém o carrinho existente no localStorage ou cria um novo array
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Adiciona o novo produto ao carrinho
  carrinho.push(produto);

  // Salva o carrinho atualizado no localStorage
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinho();
}

// Função para exibir o carrinho
function exibirCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const listaCarrinho = document.getElementById("lista-carrinho") || document.getElementById("cart-items");
  listaCarrinho.innerHTML = "";

  carrinho.forEach((produto, index) => {
      const item = document.createElement("li");
      item.textContent = `${produto.nome} - Cor: ${produto.cor}, Tamanho: ${produto.tamanho}, Preço: R$ ${produto.preco.toFixed(2)}`;
      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.addEventListener("click", () => removerDoCarrinho(index));
      item.appendChild(botaoRemover);
      listaCarrinho.appendChild(item);
  });

  const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
  const totalElemento = document.createElement("p");
  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  listaCarrinho.appendChild(totalElemento);
}

// Função para finalizar a compra
function finalizePurchase() {
  alert("Compra finalizada com sucesso!");
  localStorage.removeItem("carrinho");
  exibirCarrinho();
}

// Adiciona evento ao botão "Adicionar ao Carrinho" na página principal
if (document.getElementById("adicionar")) {
  document.getElementById("adicionar").addEventListener("click", () => {
      // Obtém as opções selecionadas
      const cor = document.getElementById("cor").value;
      const tamanho = document.getElementById("tamanho").value;

      // Verifica se as opções foram selecionadas
      if (!cor || !tamanho) {
          alert("Por favor, selecione a cor e o tamanho.");
          return;
      }

      // Cria o objeto do produto
      const produto = {
          nome: "Camisa Básica",
          preco: 50.0,
          cor: cor,
          tamanho: tamanho,
      };

      // Adiciona ao carrinho
      adicionarAoCarrinho(produto);

      alert("Produto adicionado ao carrinho!");
      exibirCarrinho();
  });
}

// Exibe os itens do carrinho na página do carrinho
if (document.getElementById("lista-carrinho") || document.getElementById("cart-items")) {
  exibirCarrinho();
}

// Exibe os itens do carrinho quando a página é carregada
document.addEventListener("DOMContentLoaded", exibirCarrinho);
