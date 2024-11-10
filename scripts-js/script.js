document.getElementById("btnPesquisa").addEventListener('click', function(){
    let menuCelular = document.getElementById('menuCelular')
    menuCelular.classList.add('menuCelular')
    let divUm = document.createElement("div");
    divUm.classList.add("divUm");
    let pUm = document.createElement("p");
    pUm.innerText = "MAIN"
    divUm.appendChild(pUm)
    menuCelular.appendChild(divUm)

    let divDois = document.createElement("div")
    divDois.classList.add("divUm")
    let pDois = document.createElement("p")
    pDois.innerText = "Second"
    divDois.appendChild(pDois)
    menuCelular.appendChild(divDois)

    let divTres = document.createElement("div")
    divTres.classList.add("divUm")
    let pTres = document.createElement("p")
    pTres.innerText = " 3"
    divTres.appendChild(pTres)
    menuCelular.appendChild(divTres)

    let divQuatro = document.createElement("div")
    divQuatro.classList.add("divUm")
    let pQuatro = document.createElement("p")
    pQuatro.innerText = "Fourth"
    divQuatro.appendChild(pQuatro)
    menuCelular.appendChild(divQuatro)
})

// function menuOnClick() {
//     document.getElementById("menu-bar").classList.toggle("change");
//     document.getElementById("navCelular").classList.toggle("change");
//     document.getElementById("menu-bg").classList.toggle("change-bg");
//   }