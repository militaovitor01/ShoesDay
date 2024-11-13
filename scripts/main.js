import { exibirProdutos } from './exibirProdutos.js';
import { ordenarRating } from  './exibirProdutos.js';

let listaProdutos = []
getProdutos()

async function getProdutos() {
    const resposta = await fetch('https://fakestoreapi.com/products')
    listaProdutos = await resposta.json()
    console.log(listaProdutos)
    
    exibirProdutos(listaProdutos)
    ordenarRating(listaProdutos)
}