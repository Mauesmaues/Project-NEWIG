const container = document.querySelector('.carrosel-container');
const items = document.querySelectorAll('.produtosCarrosel');
const setaEsquerda = document.getElementById('SetaEsquerdaCarrosel');
const setaDireita = document.getElementById('SetaDireitaCarrosel');

// Evento para a seta da direita
setaDireita.addEventListener('click', () => {
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(-210px)`; // 200px largura + 10px gap

    // Após a transição, reorganiza os itens
    setTimeout(() => {
        container.style.transition = "none";
        container.appendChild(container.firstElementChild); // Move o primeiro item para o final
        container.style.transform = `translateX(0)`; // Reseta a posição
    }, 500); // Duração igual à da transição
});

// Evento para a seta da esquerda
setaEsquerda.addEventListener('click', () => {
    container.style.transition = "none";
    container.insertBefore(container.lastElementChild, container.firstElementChild); // Move o último item para o início
    container.style.transform = `translateX(-210px)`; // Ajusta a posição inicial

    // Adiciona a animação de transição
    setTimeout(() => {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = `translateX(0)`; // Volta para a posição original
    }, 0);
});

const root = document.querySelector(':root');
const contain = document.getElementById("containVerMais")
const divBtnSecond = document.getElementById("carSecondConteudo")
document.getElementById("btnContainVerMais").addEventListener('click', function(){
    let btnTexto = document.getElementById("btnContainVerMais")
    if(contain.dataset.estado === "off"){
        root.style.setProperty("--height-size", "auto")
        contain.dataset.estado = "on"
        btnTexto.innerText = "Ver menos"
    }else{
        root.style.setProperty("--height-size", "10vh")
        contain.dataset.estado = "off"
        btnTexto.innerText = "Ver mais detalhes do produto"
    }

})


document.getElementById("btnCardSecond").addEventListener('click', function(){
    let imgCardSecond = document.getElementById("imgCardSecond")
    if(divBtnSecond.dataset.modo === "off"){
    root.style.setProperty("--cardSecond-height", "auto")
    root.style.setProperty("--cardSecond-border", "2px solid #9b9696")
    imgCardSecond.setAttribute("src", "img/setaMuvCima.png")
    divBtnSecond.dataset.modo = "on"
    }else{
    root.style.setProperty("--cardSecond-height", "0vh")
    divBtnSecond.dataset.modo = "off"
    root.style.setProperty("--cardSecond-border", "none")
    imgCardSecond.setAttribute("src", "img/setamuv34px.png")
    }
    
})

document.getElementById("btnCardOne").addEventListener('click', function(){
    divBtnOne = document.getElementById("cardOneConteudo")
    let imgCardOne = document.getElementById("imgCardOne")
    if(divBtnOne.dataset.modo === "off"){
    root.style.setProperty("--cardOne-height", "auto")
    root.style.setProperty("--cardOne-border", "2px solid #9b9696")
    imgCardOne.setAttribute("src", "img/setaMuvCima.png")
    divBtnOne.dataset.modo = "on"
    }else{
        imgCardOne.setAttribute("src", "img/setamuv34px.png")
        root.style.setProperty("--cardOne-height", "0vh")
        divBtnOne.dataset.modo = "off"
        root.style.setProperty("--cardOne-border", "none")
    }
    
})

document.getElementById("tabelaDeMedidas").addEventListener("click", function(){
    const boxMedidas = document.getElementById("medidas");
    root.style.setProperty("--tabelaMEdidas-position", "fixed")
    root.style.setProperty("--tabelaMedidas-display", "flex")
})

document.getElementById("fecharTabelaMed").addEventListener("click", function(){
    root.style.setProperty("--tabelaMEdidas-position", "none")
    root.style.setProperty("--tabelaMedidas-display", "none")
})

document.getElementById("btnPesquisa").addEventListener('click', function() {
    let menuCelular = document.getElementById('menuCelular');
    menuCelular.classList.add('menuCelular');

    // Criando os elementos dinamicamente
    let divUm = document.createElement("div");
    divUm.classList.add("divUm");
    let pUm = document.createElement("a");
    pUm.classList.add("pUm");
    pUm.href = "index.html";
    pUm.innerText = "Home";
    divUm.appendChild(pUm);
    menuCelular.appendChild(divUm);

    let divDois = document.createElement("div");
    divDois.classList.add("divUm");
    let pDois = document.createElement("a");
    pDois.href = "catalogo.html"
    pDois.innerText = "Catalogo";
    pDois.classList.add("pUm");
    divDois.appendChild(pDois);
    menuCelular.appendChild(divDois);

    let divTres = document.createElement("div");
    divTres.classList.add("divUm");
    let pTres = document.createElement("a");
    pTres.href = "junteseanos.html";
    pTres.innerText = "Junte-se a nós";
    pTres.classList.add("pUm");
    divTres.appendChild(pTres);
    menuCelular.appendChild(divTres);

    let divQuatro = document.createElement("div");
    divQuatro.classList.add("divUm");
    let pQuatro = document.createElement("a");
    pQuatro.href = "journal.html"
    pQuatro.innerText = "NEWIG Journal";
    pQuatro.classList.add("pUm");
    divQuatro.appendChild(pQuatro);
    menuCelular.appendChild(divQuatro);

    let divSeis = document.createElement("div");
    divSeis.classList.add("divUm");
    let pSeis = document.createElement("a");
    pSeis.href = "ajuda.html"
    pSeis.innerText = "Ajuda";
    pSeis.classList.add("pUm");
    divSeis.appendChild(pSeis);
    menuCelular.appendChild(divSeis);

    let divCinco = document.createElement("div");
    divCinco.classList.add("divUm");
    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.classList.add("buttonRmv");
    divCinco.appendChild(btn);
    menuCelular.appendChild(divCinco);
    // Chama a função para remover a classe "divUm" de todos os elementos quando o botão for clicado
    removerNavMobile(btn, menuCelular);
});

function removerNavMobile(btn, menuCelular) {
    btn.addEventListener("click", function() {
        // Remover o botão e a divCinco onde ele está
        let divCinco = btn.parentNode; // A div que contém o botãoS
        menuCelular.classList.remove("menuCelular")
        divCinco.parentNode.removeChild(divCinco); // Remove a divCinco inteira

        // Pega todas as divs com a classe "divUm", excluindo a divCinco
        let divUm = document.getElementsByClassName("divUm");

        // Loop para remover as divs restantes
        for (let i = divUm.length - 1; i >= 0; i--) {
            divUm[i].parentNode.removeChild(divUm[i]); // Remove cada div com a classe "divUm"
        }


        // Remover o menuCelular se desejado
        // menuCelular.parentNode.removeChild(menuCelular); // Descomente esta linha se quiser remover o menuCelular inteiro
    });
}




// const container = document.querySelector('.carrosel-container');
// const items = document.querySelectorAll('.produtosCarrosel');
// const setaEsquerda = document.getElementById('SetaEsquerdaCarrosel');
// const setaDireita = document.getElementById('SetaDireitaCarrosel');

// let currentIndex = 0; // Índice do item atual

// // Atualiza a posição do carrossel
// function updateCarousel() {
//     const itemWidth = items[0].offsetWidth + 10; // Largura do item + gap
//     const offset = -currentIndex * itemWidth;
//     container.style.transform = `translateX(${offset}px)`;
// }

// // Evento para a seta da esquerda
// setaEsquerda.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//     }
// });

// // Evento para a seta da direita
// setaDireita.addEventListener('click', () => {
//     if (currentIndex < items.length - 1) {
//         currentIndex++;
//         updateCarousel();
//     }
// });