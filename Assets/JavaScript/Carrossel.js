const next_btn = document.getElementById("next_button");
const prev_btn = document.getElementById("prev_button");
const slider = document.querySelectorAll(".slider");

let currentSlider = 0;

function hideSlide(){
    slider.forEach(item=>item.classList.remove("on"))
}

function showSlide(){
    slider[currentSlider].classList.add("on")
}

function nextSlide(){
    hideSlide()
    if(currentSlider === slider.length -1){
        currentSlider = 0
    }else{
        currentSlider++
    }
    showSlide()
}

function prevSlide(){
    hideSlide()
    if(currentSlider === 0){
        currentSlider = slider.length -1
    }else{
        currentSlider --
    }
    showSlide()
}

next_btn.addEventListener("click", nextSlide);
prev_btn.addEventListener("click", prevSlide);