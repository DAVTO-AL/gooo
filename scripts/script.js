// script.js
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMessage = document.getElementById("responseMessage");

// Si hace clic en "Sí"
yesBtn.addEventListener("click", function() {
    responseMessage.textContent = "¡Sabía que dirías que sí! ❤️";
});

// Si intenta hacer clic en "No"
noBtn.addEventListener("mouseover", function() {
    // Mover el botón "No" a una posición aleatoria en la pantalla
    const randomX = Math.floor(Math.random() * window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
