// ==========================
// FLASHCARD DIGITAL WELLBEING
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".flash-card");

    cards.forEach(function(card){

        card.addEventListener("click", function(){

            card.classList.toggle("active");

        });

    });

});