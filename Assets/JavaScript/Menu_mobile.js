const btn_menu = document.getElementById("btn_mobile");



function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault();
    
    const image = document.getElementById("menu_abrir");
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        image.src = "Assets/Images/Mobile/Icone - Fechar.svg";
    }else{
        image.src = "Assets/Images/Mobile/Icone - Menu abrir.svg";
    }
}

btn_menu.addEventListener("click", toggleMenu);
btn_menu.addEventListener("touchstart", toggleMenu);


