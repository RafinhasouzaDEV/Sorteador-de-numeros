function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if (de >= ate) {
        alert('Campo "De" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
   
    //Array com .push() para adicionar obterNumeroAleatorio(de, ate); na lista
    let sorteados = [];
    //Loop for que percorre pela quatidade de numero que o usuario digitou
    for (let i = 0; i < quantidade; i++) {
        let numero;
        numero = obterNumeroAleatorio(de, ate);
        //Loop while para: Enquanto o número sorteado já estiver na array, temos que sortear outro.
        //para verificarmos se o número já está na array, usamos o .includes().
        //Enquanto numero sorteados estiver no array.
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);    
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterandoStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterandoStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");     
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    alterandoStatusBotao();
}