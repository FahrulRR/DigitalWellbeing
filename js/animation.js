// ==============================
// SCROLL REVEAL
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealScroll(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        const visible = 120;

        if(top < windowHeight - visible){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealScroll);

window.addEventListener("load", revealScroll);