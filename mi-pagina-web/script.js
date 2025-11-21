// Esto hace que el botón funcione
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Hola! ¡Gracias por visitar mi página! 🌟");
});

// Esto cambia el color del título cuando pasas el mouse
const titulo = document.querySelector("header h1");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "#ffeb3b";
});

titulo.addEventListener("mouseout", function() {
    titulo.style.color = "white";
});