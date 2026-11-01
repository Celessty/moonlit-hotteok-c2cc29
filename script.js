<script>
        let jugador = {
            nombre: "",
            avatarImg: "personaje1.png",
            semestreActual: 1,
            semestreSeleccionado: 1,
            promedio: 0.0,
            capital: 0
        };

        function seleccionarPersonaje(nombre, imgPath, emoji, elemento) {
            document.querySelectorAll('.avatar-card').forEach(card => card.classList.remove('seleccionado'));
            elemento.classList.add('seleccionado');
            jugador.avatarImg = imgPath;
        }

        function iniciarCarrera() {
            const nombreInput = document.getElementById('nombreJugador').value.trim();
            
            if (!jugador.avatarImg) {
                alert("¡Por favor selecciona un personaje!");
                return;
            }
            if (nombreInput === "") {
                alert("¡Por favor escribe tu nombre!");
                return;
            }

            jugador.nombre = nombreInput;

            // Actualizar datos del Estado Académico
            document.getElementById('hud-promedio').innerText = jugador.promedio.toFixed(1);
            document.getElementById('hud-capital').innerText = jugador.capital.toLocaleString();
            document.getElementById('img-hud-personaje').src = jugador.avatarImg;

            // Cambiar de pantalla
            document.getElementById('pantalla-menu').classList.add('oculta');
            document.getElementById('pantalla-mapa').classList.remove('oculta');
        }

        function seleccionarSemestre(num) {
            if (num > jugador.semestreActual) return;

            jugador.semestreSeleccionado = num;
            document.querySelectorAll('.nodo-m').forEach(nodo => nodo.classList.remove('seleccionado'));
            
            const nodoElegido = document.getElementById(`nodo-${num}`);
            if (nodoElegido) nodoElegido.classList.add('seleccionado');
        }

        function rendirExamen() {
            alert(`¡Iniciando Semestre ${jugador.semestreSeleccionado}!`);
        }
        
        
    </script>

    