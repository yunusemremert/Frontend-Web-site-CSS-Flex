/* TAB BUTTON */

let tabButtons = Array.from(document.querySelectorAll(".tab_button a"));

const handleClick = (e) => {
    e.preventDefault();
    
    tabButtons.forEach(node => {
        node.classList.remove("active");
        document.getElementById(`${node.dataset.id}`).style.display = "none";
    });

    e.currentTarget.classList.add("active");
    document.getElementById(`${e.currentTarget.dataset.id}`).style.display = "";
}

tabButtons.forEach(node => {
    node.addEventListener("click", handleClick)
});

/* SLİDER */

let slider       = document.querySelectorAll(".slider .item");
let slideCount   = slider.length;
let currentSlide = 0;

function moveToSlide(n){
    slider[currentSlide].style.display = "none";
    currentSlide = (n+slideCount)%slideCount;
    slider[currentSlide].style.display = "block";
}

const nextSlide = (e) => {
    moveToSlide(currentSlide + 1);

    let code = e.keyCode;

    if(code == 39){
        moveToSlide(currentSlide + 1);
    }
};
const prevSlide = (e) => {
    moveToSlide(currentSlide +- 1);

    let code = e.keyCode;

    if(code == 37){
        moveToSlide(currentSlide +- 1);
    }
};

const slideHandlers = {
    nextSlide : (element) => {
        document.querySelector(element).addEventListener("click", nextSlide);
        document.body.addEventListener("keydown", nextSlide, false);
    },
    prevSlide : (element) => {
        document.querySelector(element).addEventListener("click", prevSlide);
        document.body.addEventListener("keydown", prevSlide, false);
    }
}

slideHandlers.prevSlide("#slider-prev");
slideHandlers.nextSlide("#slider-next");