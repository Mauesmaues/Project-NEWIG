document.getElementById("btnPesquisa").addEventListener('click', function() {
    let menuCelular = document.getElementById('menuCelular');
    menuCelular.classList.add('menuCelular');

    // Criando os elementos dinamicamente
    let divUm = document.createElement("div");
    divUm.classList.add("divUm");
    let pUm = document.createElement("p");
    pUm.classList.add("pUm");
    pUm.innerText = "Femenino";
    divUm.appendChild(pUm);
    menuCelular.appendChild(divUm);

    let divDois = document.createElement("div");
    divDois.classList.add("divUm");
    let pDois = document.createElement("p");
    pDois.innerText = "Lançamentos";
    pDois.classList.add("pUm");
    divDois.appendChild(pDois);
    menuCelular.appendChild(divDois);

    let divTres = document.createElement("div");
    divTres.classList.add("divUm");
    let pTres = document.createElement("p");
    pTres.innerText = "Ofertas";
    pTres.classList.add("pUm");
    divTres.appendChild(pTres);
    menuCelular.appendChild(divTres);

    let divQuatro = document.createElement("div");
    divQuatro.classList.add("divUm");
    let pQuatro = document.createElement("p");
    pQuatro.innerText = "Masculino";
    pQuatro.classList.add("pUm");
    divQuatro.appendChild(pQuatro);
    menuCelular.appendChild(divQuatro);

    let divSeis = document.createElement("div");
    divSeis.classList.add("divUm");
    let pSeis = document.createElement("p");
    pSeis.innerText = "Black Friday";
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


// function menuOnClick() {
//     document.getElementById("menu-bar").classList.toggle("change");
//     document.getElementById("navCelular").classList.toggle("change");
//     document.getElementById("menu-bg").classList.toggle("change-bg");
//   }