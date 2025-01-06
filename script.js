function addToCart() {
    let cartCount = document.getElementById('cart-count');
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
    cartCount.classList.add('cart-update');
    setTimeout(() => cartCount.classList.remove('cart-update'), 300);
}

document.getElementById('chatbot-toggle').addEventListener('click', function() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.classList.toggle('hidden');
});

function addToCart() {
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    let cartCount = document.getElementById('cart-count');
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;

    newFunction();

    function newFunction() {
        alert(Produto, adicionado, ao, carrinho, nTamanho, $, { size }, nCor, $, { color });
    }

    function addToCart() {
        const size = document.getElementById('size').value;
        const color = document.getElementById('color').value;
        const price = 49.90; // Preço fixo para o exemplo
    
        // Criar objeto do item do carrinho
        const item = {
            name: 'Camiseta Estilosa',
            size: size,
            color: color,
            price: price
        };
    
        // Recuperar itens existentes do localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Adicionar novo item ao array
        cartItems.push(item);
    
        // Salvar o array atualizado no localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
        // Atualizar o contador de itens no carrinho
        let cartCount = document.getElementById('cart-count');
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
    
        newFunction_1(size, color);
    }
}

function newFunction_1(size, color) {
    alert(Produto, adicionado, ao, carrinho, nTamanho, $, { size }, nCor, $, { color });
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Limpar a lista atual
    cartList.innerHTML = '';

    // Adicionar cada item do localStorage à lista de itens do carrinho
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = Camiseta - Tamanho; {item.size} Cor: {item.color}Preço: {item.price.toFixed(2)};
        cartList.appendChild(listItem);
        total += item.price;
    });

    // Atualizar o total do carrinho
    cartTotal.textContent = total.toFixed(2);

    // Atualizar o contador de itens no carrinho
    document.getElementById('cart-count').textContent = cartItems.length;
}

window.onload = loadCart;

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
}

cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = Camiseta - Tamanho; {item.size} Cor: {item.color} Preço:{item.price.toFixed(2)} <button onclick="removeItem(${index})">Remover</button>;
    cartList.appendChild(listItem);
    total += item.price;
});

function updateProductImage() {
    const color = document.getElementById('color').value;
    const productImage = document.getElementById('product-image');

    // Mapeamento de cores para imagens
    const imageMap = {
        preto: 'highMarrom.jpg',
        branco: 'highPreta.jpg',
        azul: 'then.jpg.jpg'
    };

    // Atualizar a imagem do produto
    productImage.src = imageMap[color];
}