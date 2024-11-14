const inserirProdutos = document.getElementById("produtos")
const maisBemAvaliados = document.getElementById("mais-vendidos")

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

export function ordenarRating (listaProdutos) {
    listaProdutos.sort((a, b) => b.rating.rate - a.rating.rate);
    console.log(listaProdutos)
    maisBemAvaliados.innerHTML = ``

    for(let i = 0; i < 5; i++) {
        const produto = listaProdutos[i];
        maisBemAvaliados.innerHTML += `
            <li class="menu_mais-vendidos__produto" id="produtos">
                <img src="${produto.image}" alt="">
                <p class="nome__produto">
                    ${produto.title}
                </p>
                <p class="preco__produto">
                    ${produto.price.toFixed(2)}
                </p>
                <p class="preco__produto">
                    Rating: ${produto.rating.rate}/5
                </p>
            </li>
        ` 
    }
}