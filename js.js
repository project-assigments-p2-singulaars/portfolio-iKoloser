document.addEventListener("DOMContentLoaded", function() {
    var texto = document.getElementById("texto-cambiante");
    var textos = ["HTML5", "JAVASCRIPT", "FIGMA"]; // Lista de textos que quieres mostrar
    var index = 0;

    function cambiarTexto() {
        texto.textContent = '';
        var currentText = textos[index];
        var i = 0;
        var typingEffect = setInterval(function() {
            if (i < currentText.length) {
                texto.textContent += currentText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
                setTimeout(function() {
                    borrarTexto();
                }, 2000); // Espera 2 segundos antes de borrar el texto
            }
        }, 100); // Velocidad de escritura, ajusta según desees
    }

    function borrarTexto() {
        var i = textos[index].length - 1;
        var deletingEffect = setInterval(function() {
            if (i >= 0) {
                var currentText = texto.textContent;
                texto.textContent = currentText.slice(0, -1);
                i--;
            } else {
                clearInterval(deletingEffect);
                index = (index + 1) % textos.length;
                setTimeout(function() {
                    cambiarTexto();
                }, 1000); // Espera 1 segundo antes de escribir el próximo texto
            }
        }, 50); // Velocidad de borrado, ajusta según desees
    }

    cambiarTexto(); // Comienza el ciclo
});
