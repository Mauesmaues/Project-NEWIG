const root = document.querySelector(':root');
const contain = document.getElementById("containVerMais")

document.getElementById("btnContainVerMais").addEventListener('click', function(){
    let btnTexto = document.getElementById("btnContainVerMais")
    if(contain.dataset.estado === "off"){
        root.style.setProperty("--height-size", "30vh")
        contain.dataset.estado = "on"
        btnTexto.innerText = "Ver menos"
    }else{
        root.style.setProperty("--height-size", "10vh")
        contain.dataset.estado = "off"
        btnTexto.innerText = "Ver mais detalhes do produto"
    }

})