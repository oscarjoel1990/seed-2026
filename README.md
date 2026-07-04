# SEED 2026 — Landing page del encuentro

Sitio publicado: https://oscarjoel1990.github.io/seed-2026/

Landing page estática (HTML + CSS + JS vanilla) para el encuentro **SEED 2026: Soil, Earth. Regenerative Design**. No requiere backend, base de datos ni servicios de pago. Lista para publicarse gratis en GitHub Pages.

## 1. Qué contiene este proyecto

```
seed-landing/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── logo-seed.svg          → wordmark para header y footer
    │   ├── poster-seed-2026.jpg   → invitación oficial (usada en el hero)
    │   └── og-seed-2026.jpg       → imagen para redes sociales (Open Graph)
    └── icons/
        └── mark-seed.svg          → ícono/favicon
```

## 2. Datos verificados vs. placeholders

Este sitio se construyó a partir de dos fuentes reales que encontré en tu carpeta SEED del escritorio: el archivo **Invitacion.jpeg** y el sitio institucional previo (`seedcontactomx.wixsite.com/seed-2024`). No se inventó ninguna fecha, sede, cifra ni nombre.

**Ya confirmado (viene de tus archivos):**
- Nombre del encuentro: *Soil, Earth. Regenerative Design* / SEED 2026.
- Fechas: 17 y 18 de octubre de 2026.
- Sede: Zyanya — Rey Maxtla 188, San Francisco Tetecala, Azcapotzalco, CDMX.
- Descripción institucional (los 3 ejes temáticos: suelo fértil, biomateriales, proyectos regenerativos).
- Correo (`seed.contactomx@gmail.com`), Instagram (`@seedcollective.mx`) y WhatsApp (`+52 56 1133 9050`) — **estos tres datos son del sitio de la edición 2024. Confirma que sigan vigentes para 2026 antes de publicar.**

**Pendiente — búscalo en el buscador de tu navegador o reemplázalo manualmente (marcado con `[corchetes]` o "No consta" en el código):**
- Horario exacto de cada día.
- Modalidad (presencial / híbrida / virtual).
- Costo del boleto para 2026.
- Nombres y cargos de ponentes/participantes 2026.
- Agenda definitiva (horarios y actividades de la sección `#agenda`).
- Liga de registro (Google Forms, Tally o similar).
- URL final del sitio publicado (meta `og:url`).
- Liga de LinkedIn de SEED, si aplica.

## 3. Cómo editar el contenido

Todo el copy vive en `index.html`. Busca el texto entre `[corchetes]` y sustitúyelo directamente. Ejemplos:

- `[Horario] — por confirmar` → escribe el horario real, por ejemplo `9:00 a 15:00 h`.
- `[Liga de registro]` (aparece dos veces: en el botón de la sección Registro y en el `schema.org` del `<head>`) → pega la URL de tu formulario.
- `[Costo del boleto]` → escribe el precio o dilo como "Entrada libre" si aplica.
- Tarjetas de `#participantes` → sustituye `[Nombre del participante]`, `[Cargo / organización]` y las iniciales `[NP]` por cada ponente confirmado.

## 4. Cómo cambiar el logo

1. Reemplaza `assets/images/logo-seed.svg` por el archivo oficial del logo si cuentas con el original en PNG o SVG.
2. Si usas PNG, actualiza las referencias en `index.html` (hay dos: header y footer) cambiando `logo-seed.svg` por el nuevo nombre de archivo, por ejemplo `logo-seed.png`.
3. Actualiza también `assets/icons/mark-seed.svg` (favicon) si el logo cambia de forma.

## 5. Cómo cambiar los colores

Los colores institucionales están centralizados en `styles.css`, dentro de `:root`:

```css
--c-bg: #080c07;            /* fondo principal, verde-negro profundo */
--c-primary: #6dbb43;       /* verde institucional (medio) */
--c-primary-bright: #9ce85f;/* verde lima — botones y acentos */
--c-ink: #f5f7f1;           /* texto principal (blanco cálido) */
```

Cambia estos valores hexadecimales y el resto del sitio se actualiza automáticamente, porque todos los estilos usan estas variables.

## 6. Cómo publicar en GitHub Pages (con la cuenta oscarjoel1990)

1. Entra a GitHub con la cuenta `oscarjoel1990` y crea un repositorio nuevo, por ejemplo `seed-2026`.
2. Sube el contenido de esta carpeta (`index.html`, `styles.css`, `script.js`, la carpeta `assets/` y este `README.md`) a la raíz del repositorio. Puedes arrastrar los archivos desde la interfaz web de GitHub ("Add file" → "Upload files") o usar Git desde tu computadora.
3. Ve a **Settings → Pages** del repositorio.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL pública, normalmente `https://oscarjoel1990.github.io/seed-2026/`.
6. Actualiza esa URL en `index.html` donde dice `[URL del sitio publicado]` (meta `og:url`) y vuelve a subir el archivo.

No se necesita build, `npm install` ni configuración adicional: el sitio funciona tal cual con HTML, CSS y JS estándar.

## 7. Cómo conectar el botón de registro

GitHub Pages no tiene backend, así que el registro debe resolverse con un servicio externo gratuito:

1. Crea un formulario en **Google Forms**, **Tally** o **Typeform (plan gratuito)** con los campos que necesites (nombre, correo, organización, etc.).
2. Copia la liga pública de ese formulario.
3. En `index.html`, busca `[Liga de registro]` (dentro de `<section id="registro">`) y sustitúyelo por esa URL.
4. Actualiza también el mismo placeholder dentro del bloque `schema.org` (`<script type="application/ld+json">`) en el `<head>`.

Como alternativa o complemento, el botón de correo (`mailto:`) y el botón de WhatsApp (`wa.me`) ya están conectados a los datos de contacto encontrados en tus archivos — confirma que sigan vigentes.

## 8. Checklist antes de publicar

- [ ] Sustituir `[Liga de registro]` en las dos ubicaciones donde aparece.
- [ ] Confirmar horario, modalidad y costo (o marcar "entrada libre").
- [ ] Confirmar que el correo, WhatsApp e Instagram de contacto sigan vigentes para 2026.
- [ ] Sustituir las tarjetas de participantes con nombres reales, si ya están confirmados.
- [ ] Completar la agenda definitiva de ambos días.
- [ ] Reemplazar `[URL del sitio publicado]` con la URL real de GitHub Pages.
- [ ] Reemplazar `[LinkedIn de SEED]` o eliminar ese enlace del footer si no aplica.
- [ ] Revisar el sitio en móvil y escritorio antes de compartir la liga.
- [ ] (Opcional) Sustituir `logo-seed.svg` por el archivo oficial del logo si está disponible en alta resolución.

## 9. Nota importante

Este es un sitio **100% estático**: no tiene backend, base de datos ni almacenamiento de datos de los usuarios. Cualquier "envío" de formulario debe resolverse con un servicio externo (Google Forms, Tally, etc.) o mediante correo/WhatsApp, tal como está configurado.
