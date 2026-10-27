// 1. Seu nome um abaixo do outro
const nomes = ["Krislaine", "Lima", "Silvestre"];
const nomesAdicionados = [];

const lista = document.getElementById("lista");
const listaAdicionados = document.getElementById("listaAdicionados");
const input = document.getElementById("inputNome");
const botao = document.getElementById("botao");

// 2. Mostra seu nome fixo
function mostrarMeuNome() {
    lista.innerHTML = "";
    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

// 3. Mostra só os adicionados
function mostrarAdicionados() {
    listaAdicionados.innerHTML = "";
    for (let nome of nomesAdicionados) {
        listaAdicionados.innerHTML += `<li>${nome}</li>`;
    }
}

botao.addEventListener("click", () => {
    if (input.value !== "") {
        nomesAdicionados.push(input.value);
        input.value = "";
        mostrarAdicionados();
    }
});

mostrarMeuNome();