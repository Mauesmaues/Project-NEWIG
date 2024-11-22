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
    root.style.setProperty("--cardSecond-border", "2px solid #000")
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
    root.style.setProperty("--cardOne-border", "2px solid #000")
    imgCardOne.setAttribute("src", "img/setaMuvCima.png")
    divBtnOne.dataset.modo = "on"
    }else{
        imgCardOne.setAttribute("src", "img/setamuv34px.png")
        root.style.setProperty("--cardOne-height", "0vh")
        divBtnOne.dataset.modo = "off"
        root.style.setProperty("--cardOne-border", "none")
    }
    
})


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