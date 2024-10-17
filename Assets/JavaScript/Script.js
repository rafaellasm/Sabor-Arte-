var ver_mais = document.getElementById("veja_mais_dia1");

ver_mais.addEventListener("click", function(){
    var paragrafo = document.getElementById("paragrafo_dia1");

    if(paragrafo.style.display === "none"){
        paragrafo.style.display = "block";
        return ver_mais.textContent = "Ver menos";
    }else{
        paragrafo.style.display = "none";
    }

    return ver_mais.textContent = "Veja mais";
   
});

var ver_dia2 = document.getElementById("veja_mais_dia2");

ver_dia2.addEventListener("click", function(){
    var paragrafo = document.getElementById("paragrafo_dia2");

    if(paragrafo.style.display === "none"){
        paragrafo.style.display = "block";
        return ver_dia2.textContent = "Ver menos";
    }else{
        paragrafo.style.display = "none";
    }

    return ver_dia2.textContent = "Veja mais";
});

var ver_dia3 = document.getElementById("veja_mais_dia3");

ver_dia3.addEventListener("click", function(){
    var paragrafo = document.getElementById("paragrafo_dia3");

    if(paragrafo.style.display === "none"){
        paragrafo.style.display = "block";
        return ver_dia3.textContent = "Ver menos";
    }else{
        paragrafo.style.display = "none";
    }

    return ver_dia3.textContent = "Veja mais";
});








