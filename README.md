# ⚡ Zeri — Fan Page

Fan page no oficial del personaje Zeri de League of Legends.  
Desarrollado por **Perez Haedo Axel Manuel** como proyecto de práctica de HTML, CSS y JavaScript.

---

## 📄 Descripción

Página web dedicada a Zeri, "La Chispa de Zaun", que incluye su lore, estadísticas base, habilidades y una trivia interactiva. El diseño cambia de colores según la skin seleccionada.

---

## 🗂️ Estructura del proyecto

```
zeri/
│
├── index.html       # Archivo principal con todo el contenido
├── style.css        # Archivo para lo estetico
├── script.js        # Archivo para lo funcional
└── README.md        # Este archivo
```

Todo el código (HTML, CSS y JavaScript) está en un único archivo `index.html`.

---

## 📦 Tecnologías usadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura del contenido |
| CSS3 | Estilos, animaciones y diseño responsive |
| JavaScript | Interactividad (cambio de skins, trivia, carrusel) |
| Bootstrap 5 | Base de estilos y utilidades |

> ⚠️ La parte de JavaScript fue desarrollada con asistencia de inteligencia artificial (Claude de Anthropic), ya que está fuera del alcance del curso actual.

---

## 🧩 Secciones de la página

### Inicio / Hero
Presentación del personaje con imagen principal y carrusel de skins. Al hacer clic en una skin, cambia la imagen y el tema de colores de toda la página.

### Lore
Breve historia de Zeri: su origen en Zaun, su vínculo con la electricidad y su motivación.

### Estadísticas Base
Tabla visual con las stats base del personaje (HP, Maná, Daño, Armadura, Resistencia Mágica y Velocidad) representadas con barras de progreso.

### Habilidades
Cinco tarjetas, una por habilidad (Pasiva, Q, W, E, R). Al pasar el mouse por encima se muestra un video de demostración.

### Trivia
Mini juego de 5 preguntas sobre Zeri. Muestra feedback inmediato por respuesta y un puntaje final con mensaje personalizado.

---

## 🎨 Sistema de temas (skins)

Cada skin aplica una clase al `<body>` que sobreescribe las variables CSS, cambiando el color principal y el fondo de toda la página.

| Skin | Clase CSS | Color |
|------|-----------|-------|
| Zeri (base) | `base` | Amarillo `#f5e642` |
| Withered Rose | `witheredrose` | Rosa `#f542a7` |
| Ocean Song | `oceansong` | Celeste `#42c8f5` |
| Immortal Journey | `immortaljourney` | Dorado `#f5c842` |
| Fright Night | `frightnight` | Verde `#42f55a` |
| Prestige Fright Night | `prestige` | Violeta `#c842f5` |
| Winter Wonder | `winterwonder` | Blanco azulado `#e8f0ff` |

---

## 📱 Diseño Responsive

La página se adapta a pantallas pequeñas mediante media queries (`@media (max-width: 768px)`):
- El hero pasa de horizontal a vertical
- El menú lateral se convierte en un menú hamburguesa
- Las tarjetas y estadísticas se ajustan al ancho disponible

---

## ⚠️ Aviso legal

Página de uso educativo y no comercial.  
League of Legends y todos sus personajes son propiedad de **Riot Games**.
