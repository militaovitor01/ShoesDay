const inserirProdutos = document.getElementById("produtos")

export function exibirProdutos(listaProdutos) {
    inserirProdutos.innerHTML = ``
    listaProdutos.forEach(produto => {
        inserirProdutos.innerHTML += `
            <li class="lista__produtos__produto" id="produtos">
                <img src="${produto.image}" alt="">
                <p class="nome__produto">
                    ${produto.title}
                </p>
                <p class="preco__produto">
                    ${produto.price.toFixed(2)}
                </p>
            </li>
        `
    });
}