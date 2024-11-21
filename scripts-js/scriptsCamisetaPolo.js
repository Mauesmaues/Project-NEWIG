const root = document.querySelector(':root');
const main = document.querySelector('main')

document.getElementById("btnContainVerMais").addEventListener('click', function(){
    root.style.setProperty("--height-size", "30vh")
    if(main.dataset.estado == off){
        root.style.setProperty("--height-size", "30vh")
        main.dataset.estado = "on"
    }
    if(main.dataset.estado == on){
        root.style.setProperty("--height-size", "10vh")
        main.dataset.estado = "off"
    }
})