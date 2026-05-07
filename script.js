
        /*
         * ============================================================
         * FUNCIÓN: cambiarColor(skin)
         * Cambia el tema visual de la página según la skin elegida.
         *
         * - Aplica una clase CSS al <body> (ej: "witheredrose")
         *   que sobreescribe --color-principal y el fondo.
         * - Actualiza la imagen principal y el favicon.
         *
         * Parámetro: skin (string) — nombre de la skin seleccionada
         * ============================================================
         */
        function cambiarColor(skin) {
            document.body.className = skin;

            if (skin === 'base') {
                document.getElementById('imagen-principal').src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_OriginalCircle.png/48px-Zeri_OriginalCircle.png?8ae8b';
            } else if (skin === 'witheredrose') {
                document.getElementById('imagen-principal').src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_1.jpg';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_WitheredRoseCircle.png/48px-Zeri_WitheredRoseCircle.png?db3e4';
            } else if (skin === 'oceansong') {
                document.getElementById('imagen-principal').src = 'https://wiki.leagueoflegends.com/en-us/images/Zeri_OceanSongSkin.jpg?7853b';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_OceanSongCircle.png/48px-Zeri_OceanSongCircle.png?03d4c';
            } else if (skin === 'immortaljourney') {
                document.getElementById('imagen-principal').src = 'https://wiki.leagueoflegends.com/en-us/images/Zeri_ImmortalJourneySkin.jpg?92a3f';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_ImmortalJourneyCircle.png/48px-Zeri_ImmortalJourneyCircle.png?26ea1';
            } else if (skin === 'frightnight') {
                document.getElementById('imagen-principal').src = 'https://wiki.leagueoflegends.com/en-us/images/Zeri_FrightNightSkin.jpg?e8d99';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_FrightNightCircle.png/48px-Zeri_FrightNightCircle.png?089c7';
            } else if (skin === 'prestige') {
                document.getElementById('imagen-principal').src = 'https://wiki.leagueoflegends.com/en-us/images/Zeri_PrestigeFrightNightSkin.jpg?4c6cb';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_PrestigeFrightNightCircle.png/48px-Zeri_PrestigeFrightNightCircle.png?80e42';
            } else if (skin === 'winterwonder') {
                document.getElementById('imagen-principal').src = 'https://wiki.leagueoflegends.com/en-us/images/Zeri_WinterWonderSkin.jpg?4d8b3';
                document.getElementById('favicon').href = 'https://wiki.leagueoflegends.com/en-us/images/thumb/Zeri_WinterWonderCircle.png/48px-Zeri_WinterWonderCircle.png?a2b6d';
            }
        }

        /*
         * ============================================================
         * FUNCIÓN: moverSkins(direccion)
         * Desplaza el carrusel de skins horizontalmente.
         *
         * - Calcula el ancho de una skin-item (incluyendo margen).
         * - Mueve el scroll del contenedor en esa cantidad.
         *
         * Parámetro: direccion (número) — -1 para izquierda, 1 para derecha
         * ============================================================
         */
        function moverSkins(direccion) {
            const contenedor = document.getElementById('contenedor-imagenes');
            const item = contenedor.querySelector('.skin-item');
            const ancho = item.getBoundingClientRect().width + 16; // 16px = margen entre items
            contenedor.scrollLeft += direccion * ancho;
        }

        /*
         * ============================================================
         * CARGA LAZY DE VIDEOS EN HABILIDADES
         * Al hacer hover sobre una tarjeta, crea el elemento <video>
         * solo si no existe todavía, evitando cargar todos los videos
         * al inicio de la página.
         * ============================================================
         */
        document.querySelectorAll('.tarjeta').forEach(function(tarjeta) {
            tarjeta.addEventListener('mouseenter', function() {
                const tooltip = tarjeta.querySelector('.tooltip-video');
                if (tooltip && !tooltip.querySelector('video')) {
                    // Primera vez que se hace hover: crear el video
                    const src = tooltip.getAttribute('data-src');
                    const video = document.createElement('video');
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    video.style.width = '100%';
                    const source = document.createElement('source');
                    source.src = src;
                    video.appendChild(source);
                    tooltip.appendChild(video);
                } else if (tooltip && tooltip.querySelector('video')) {
                    // Siguientes hovers: reiniciar el video desde el principio
                    tooltip.querySelector('video').currentTime = 0;
                }
            });
        });

        /*
         * ============================================================
         * FUNCIÓN: toggleMenu()
         * Muestra u oculta el menú en pantallas pequeñas.
         * Solo actúa si el ancho de pantalla es menor a 768px.
         * ============================================================
         */
        function toggleMenu() {
            if (window.innerWidth > 768) return;
            const nav = document.querySelector('.navbar-lateral');
            const btn = document.querySelector('.btn-hamburguesa');
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
                btn.textContent = '☰';
            } else {
                nav.style.display = 'flex';
                btn.textContent = '✕';
            }
        }

        /*
         * Muestra el menú lateral en escritorio al pasar el 50% del scroll.
         * En móvil no hace nada (se maneja con toggleMenu).
         */
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('.navbar-lateral');
            if (window.innerWidth > 768) {
                if (window.scrollY > window.innerHeight * 0.5) {
                    nav.style.display = 'flex';
                } else {
                    nav.style.display = 'none';
                }
            }
        });

        /* ============================================================
           TRIVIA — DATOS Y LÓGICA
           Las preguntas están guardadas en un array de objetos.
           Cada objeto tiene: pregunta (texto), opciones (array) y
           correcta (índice de la opción correcta).
        ============================================================ */
        const preguntas = [
            { pregunta: "¿De qué ciudad es originaria Zeri?", opciones: ["Piltover", "Zaun", "Noxus", "Demacia"], correcta: 1 },
            { pregunta: "¿Quién le construyó la pistola a Zeri?", opciones: ["Su madre", "Su padre", "Su abuela", "Ella misma"], correcta: 2 },
            { pregunta: "¿Qué hace la E de Zeri (Chispazo)?", opciones: ["Dispara un láser", "Se desplaza hacia adelante y puede atravesar paredes", "Carga energía eléctrica", "Invoca una nova eléctrica"], correcta: 1 },
            { pregunta: "¿Cuántas balas dispara la Q de Zeri (Ráfaga de Luz)?", opciones: ["5", "6", "7", "8"], correcta: 2 },
            { pregunta: "¿Cuál es el HP base de Zeri?", opciones: ["520", "560", "600", "640"], correcta: 2 }
        ];

        // Variables de estado de la trivia
        let preguntaActual = 0; // Índice de la pregunta en curso
        let puntaje = 0;        // Cantidad de respuestas correctas
        let respondida = false; // Evita responder dos veces la misma pregunta

        /*
         * ============================================================
         * FUNCIÓN: cargarPregunta()
         * Muestra la pregunta actual y genera los botones de opciones.
         * Se llama al inicio y después de cada respuesta.
         * ============================================================
         */
        function cargarPregunta() {
            respondida = false;
            const p = preguntas[preguntaActual];
            document.getElementById('numero-pregunta').textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
            document.getElementById('texto-pregunta').textContent = p.pregunta;
            const opciones = document.getElementById('opciones');
            opciones.innerHTML = ''; // Limpia los botones anteriores
            p.opciones.forEach(function(opcion, i) {
                const btn = document.createElement('button');
                btn.textContent = opcion;
                btn.className = 'minijuego-btn-opcion';
                btn.onclick = function() { responder(i, btn); };
                opciones.appendChild(btn);
            });
        }

        /*
         * ============================================================
         * FUNCIÓN: responder(indice, btn)
         * Procesa la respuesta del usuario.
         *
         * - Marca el botón elegido como correcto o incorrecto.
         * - Siempre resalta cuál era la correcta.
         * - Espera 1 segundo y avanza a la siguiente pregunta
         *   o muestra el resultado final.
         *
         * Parámetros:
         *   indice (número) — índice de la opción clickeada
         *   btn (elemento) — botón clickeado
         * ============================================================
         */
        function responder(indice, btn) {
            if (respondida) return; // Evita doble respuesta
            respondida = true;
            const correcta = preguntas[preguntaActual].correcta;

            // Marcar todos los botones: siempre mostrar cuál era la correcta
            document.querySelectorAll('#opciones button').forEach(function(b, i) {
                b.style.cursor = 'default';
                if (i === correcta) b.classList.add('correcto');
            });

            if (indice === correcta) {
                puntaje++;
            } else {
                btn.classList.add('incorrecto'); // Marcar también el elegido si era incorrecto
            }

            // Avanzar luego de 1 segundo
            setTimeout(function() {
                preguntaActual++;
                if (preguntaActual < preguntas.length) {
                    cargarPregunta();
                } else {
                    mostrarResultadoTrivia();
                }
            }, 1000);
        }

        /*
         * ============================================================
         * FUNCIÓN: mostrarResultadoTrivia()
         * Oculta el panel de pregunta y muestra el panel de resultado.
         * Elige un mensaje según el puntaje obtenido.
         * ============================================================
         */
        function mostrarResultadoTrivia() {
            document.getElementById('trivia-pregunta').style.display = 'none';
            document.getElementById('trivia-resultado').style.display = 'block';

            const mensajes = [
                { titulo: "😬 ¿Sos fan?", mensaje: "Parece que Zeri te es un poco desconocida. ¡Leé el lore y volvé a intentarlo!" },
                { titulo: "⚡ Vas aprendiendo", mensaje: "No está mal, pero Zeri merece más estudio. ¡Otro intento!" },
                { titulo: "🔥 Buen conocimiento", mensaje: "Sabés bastante de La Chispa de Zaun. ¡Casi perfecto!" },
                { titulo: "✨ Sos fan de verdad", mensaje: "Conocés a Zeri como nadie. ¡La Chispa de Zaun estaría orgullosa!" }
            ];

            // Elegir nivel de mensaje según puntaje
            const nivel = puntaje <= 1 ? 0 : puntaje <= 2 ? 1 : puntaje <= 4 ? 2 : 3;
            document.getElementById('resultado-titulo').textContent = mensajes[nivel].titulo;
            document.getElementById('resultado-puntaje').textContent = `${puntaje} / ${preguntas.length} correctas`;
            document.getElementById('resultado-mensaje').textContent = mensajes[nivel].mensaje;
        }

        /*
         * ============================================================
         * FUNCIÓN: reiniciarTrivia()
         * Resetea el estado de la trivia y vuelve a la primera pregunta.
         * ============================================================
         */
        function reiniciarTrivia() {
            preguntaActual = 0;
            puntaje = 0;
            document.getElementById('trivia-pregunta').style.display = 'block';
            document.getElementById('trivia-resultado').style.display = 'none';
            cargarPregunta();
        }

        // Cargar la primera pregunta al abrir la página
        cargarPregunta();

        /* ============================================================
         * ANIMACIÓN DE ENTRADA DE BARRAS (Intersection Observer)
         * Guarda el ancho original de cada barra en --ancho-final,
         * las pone en 0, y dispara la animación cuando la sección
         * entra en la pantalla.
         * ============================================================ */
        const barras = document.querySelectorAll('.stat-barra');

        barras.forEach(function(barra) {
            const anchoOriginal = barra.style.width;
            barra.style.setProperty('--ancho-final', anchoOriginal);
            barra.style.width = '0%';
            barra.dataset.anchoOriginal = anchoOriginal;
        });

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Animar cada barra con un pequeño delay escalonado
                    barras.forEach(function(barra, i) {
                        setTimeout(function() {
                            barra.classList.add('animada');
                            barra.style.width = barra.dataset.anchoOriginal;
                        }, i * 150);
                    });
                    observer.disconnect(); // Solo animar una vez
                }
            });
        }, { threshold: 0.3 });

        observer.observe(document.querySelector('.stats'));
        
/* ============================================================
   MEDIDOR DE VOLTAJE
   Aparece cuando el usuario clickea rápido (más de 3 clicks
   en menos de 1 segundo). Sube con cada click y baja solo.
   Al llegar al 100% lanza la animación de descarga.
============================================================ */
let voltaje = 0;
let descargando = false;
let clicksRecientes = [];
const panel = document.getElementById('voltaje-panel');
const barraVoltaje = document.getElementById('voltaje-barra');
const numeroVoltaje = document.getElementById('voltaje-numero');
const overlay = document.getElementById('descarga-overlay');
const textoDescarga = document.getElementById('texto-descarga');

// Bajar el voltaje automáticamente cada 50ms
setInterval(function() {
    if (!descargando && voltaje > 0) {
        voltaje = Math.max(0, voltaje - 1.5);
        actualizarVoltaje();

        // Ocultar panel si llega a 0
        if (voltaje === 0) {
            panel.style.display = 'none';
        }
    }
}, 50);

// Detectar clicks en toda la página
document.addEventListener('click', function() {
    if (descargando) return;

    // Registrar el click con timestamp
    const ahora = Date.now();
    clicksRecientes.push(ahora);

    // Limpiar clicks viejos (más de 1 segundo)
    clicksRecientes = clicksRecientes.filter(t => ahora - t < 1000);

    // Solo activar si hay más de 3 clicks en el último segundo
    if (clicksRecientes.length >= 3) {
        panel.style.display = 'flex';
        voltaje = Math.min(100, voltaje + 8);
        actualizarVoltaje();

        if (voltaje >= 100) {
            lanzarDescarga();
        }
    }
});

function actualizarVoltaje() {
    // En móvil la barra es horizontal (width), en escritorio es vertical (height)
    const esMobil = window.innerWidth <= 768;
    if (esMobil) {
        barraVoltaje.style.width = voltaje + '%';
        barraVoltaje.style.height = '100%';
    } else {
        barraVoltaje.style.height = voltaje + '%';
        barraVoltaje.style.width = '100%';
    }
    numeroVoltaje.textContent = Math.round(voltaje) + '%';

    if (voltaje >= 70) {
        barraVoltaje.classList.add('peligro');
    } else {
        barraVoltaje.classList.remove('peligro');
    }
}

function lanzarDescarga() {
    descargando = true;

    overlay.classList.add('activo');
    textoDescarga.style.display = 'block';

    // Crear rayos en posiciones aleatorias
    for (let i = 0; i < 6; i++) {
        const rayo = document.createElement('div');
        rayo.className = 'rayo-descarga';
        rayo.textContent = '⚡';
        rayo.style.top = Math.random() * 80 + '%';
        rayo.style.left = Math.random() * 80 + '%';
        rayo.style.animationDelay = (Math.random() * 0.3) + 's';
        document.body.appendChild(rayo);
        setTimeout(() => rayo.remove(), 1000);
    }

    // Resetear después de la animación
    setTimeout(function() {
        overlay.classList.remove('activo');
        textoDescarga.style.display = 'none';
        voltaje = 0;
        actualizarVoltaje();
        panel.style.display = 'none';
        descargando = false;
        clicksRecientes = [];
    }, 900);
}