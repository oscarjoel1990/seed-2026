# SEED 2026 — Landing page del encuentro

Sitio publicado: https://oscarjoel1990.github.io/seed-2026/

**Fase actual: maqueta comercial avanzada (preventa), no venta pública activa.** El sitio ya está orientado 100% a vender boletos —ancla de precio ($7,000 vs $4,200 MXN), cuenta regresiva de la etapa Early Bird, sección de valor, beneficios, networking/casos de éxito, FAQ comercial y CTA final— pero el botón de compra está **intencionalmente deshabilitado** porque todavía no existe la liga real de Mercado Pago. Los datos que faltan (horario, precio regular posterior, casos 2024, participantes, etc.) se muestran como etiquetas `[placeholder]` a propósito: funcionan como checklist visual de lo que falta antes de activar la venta pública.

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

**Precio y etapa Early Bird — datos que me diste directamente (no vienen de archivos, los uso tal cual me los compartiste):**
- Precio Early Bird: **$4,200 MXN por persona**, vigente del **20 de julio al 31 de agosto de 2026**.
- Valor de referencia usado como ancla de precio: "más de $7,000 MXN por persona" (se presenta como acceso patrocinado, no como simple descuento).
- Precio regular después del 31 de agosto: **no me lo diste, así que quedó como la etiqueta** `[Precio regular posterior pendiente]`. Complétalo en cuanto lo definas (aparece en 3 lugares: sección Boletos, FAQ y CTA final).

**Pendiente — todas estas etiquetas son intencionales (checklist visual de esta fase de preventa). Búscalas en el buscador de tu navegador o reemplázalas directamente en el código:**
- `[Horario por confirmar]` — horario exacto de cada día (hero).
- `[Sede / detalles logísticos por completar]` — modalidad presencial/híbrida/virtual (sección Sede).
- `[Precio regular posterior pendiente]` — precio después del Early Bird (Boletos, FAQ, CTA final).
- `[Liga Mercado Pago pendiente]` — liga de pago (ver sección 7). El botón de compra está deshabilitado (`<button disabled>`) hasta que exista esta liga.
- `[Patrocinadores por confirmar]` — nombres de marcas/organizaciones aliadas (sección Boletos).
- `[Casos 2024 por documentar]` y las 3 tarjetas de `#networking` — nombres de alianza/proyecto, organizaciones involucradas y resultado concreto. **No inventé ningún caso** — publicar casos falsos sería publicidad engañosa.
- `[Participantes por anunciar]` y las tarjetas de `#participantes` — nombres y cargos de ponentes 2026.
- Agenda definitiva (horarios y actividades de la sección `#agenda`).
- `[LinkedIn de SEED]` en el footer, si aplica.

**No se inventó ningún dato para esta iteración:** ni ligas de pago, ni patrocinadores, ni casos 2024, ni participantes. Todo lo que no consta en tus archivos o en lo que me indicaste queda marcado como pendiente.

## 3. Cómo editar el contenido

Todo el copy vive en `index.html`. Los datos pendientes se ven como una etiqueta con borde punteado (clase `.placeholder-tag`) — por diseño, para que no parezcan un error sino un pendiente editorial. Busca el texto entre `[corchetes]` y sustitúyelo directamente (puedes dejar o quitar el `<span class="placeholder-tag">` que lo envuelve, según prefieras). Ejemplos:

- `[Horario por confirmar]` (hero) → escribe el horario real, por ejemplo `9:00 a 15:00 h`.
- `[Liga Mercado Pago pendiente]` → una vez que tengas la liga real, ver sección 7 para activar el botón de compra (hoy es un `<button disabled>`, no un enlace).
- `[Precio regular posterior pendiente]` (Boletos, FAQ y CTA final) → escribe el precio que aplicará a partir del 1 de septiembre de 2026.
- `[Patrocinadores por confirmar]` (sección Boletos) → nombra las marcas u organizaciones aliadas conforme se confirmen.
- Tarjetas de `#networking` → sustituye los placeholders de cada uno de los 3 casos (alianza, colaboración, oportunidad de networking) con historias reales de la edición 2024.
- Tarjetas de `#participantes` → sustituye `[Nombre del participante]`, `[Cargo / organización]` y las iniciales `[NP]` por cada ponente confirmado. Los "ejes temáticos" (chips debajo de las tarjetas) ya son datos reales y no necesitan cambiarse salvo que la temática cambie.
- `[Sede / detalles logísticos por completar]` (sección Sede) → especifica la modalidad (presencial/híbrida/virtual) en cuanto se confirme.

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

No se necesita build, `npm install` ni configuración adicional: el sitio funciona tal cual con HTML, CSS y JS estándar.

## 7. Cómo conectar el botón de compra (Mercado Pago) — cuando decidas activar la venta

Esta iteración deja el botón de compra **deshabilitado a propósito** (`<button type="button" disabled>`), no como un enlace, precisamente para no publicar un link que dé error 404 mientras no exista la liga real. Hay dos botones así: uno en la sección **Boletos** (`#boletos`) y otro en el **CTA final** (`#registro`); ambos tienen un comentario `<!-- TODO -->` justo arriba en el código. El botón del hero ("Ver boleto Early Bird") sí es un enlace real, pero solo navega a la sección `#boletos` — no intenta cobrar nada.

Cuando quieras activar la venta pública:

1. Entra a tu cuenta de Mercado Pago (una cuenta gratuita es suficiente) en [mercadopago.com.mx](https://www.mercadopago.com.mx).
2. En el menú, busca **Cobrar → Link de pago**.
3. Da clic en **"Ingresar monto"**, escribe `$4,200 MXN` y el título que verá quien compre, por ejemplo "Boleto SEED 2026 — Early Bird".
4. Opcionalmente agrega una imagen, elige los medios de pago que aceptas y configura el **vencimiento del link** (por ejemplo, el 31 de agosto de 2026) y la página de redirección tras el pago.
5. Da clic en **"Crear Link de pago"** y copia la URL generada (se ve como `https://mpago.la/xxxxxxx`).
6. En `index.html`, en cada uno de los dos `<button disabled class="... is-pending">Link de compra próximamente / Comprar boleto Early Bird — próximamente</button>`:
   - Cámbialo por `<a href="TU_LIGA_AQUI" class="btn btn-primary btn-large btn-buy" target="_blank" rel="noopener">` con el mismo texto de venta (por ejemplo "Comprar mi boleto — $4,200 MXN").
   - Quita el atributo `disabled` y la clase `is-pending`.
7. Sustituye también las etiquetas `[Liga Mercado Pago pendiente]` cercanas a cada botón, y agrega `"url": "TU_LIGA_AQUI"` dentro del bloque `"offers"` de `schema.org` (`<script type="application/ld+json">` en el `<head>` — hoy ese campo no existe a propósito, para no anunciar una compra que aún no se puede completar).

Crear un Link de pago no tiene costo; Mercado Pago solo cobra su comisión habitual cuando se concreta una venta.

Como alternativa o complemento, el botón de correo (`mailto:`) y el botón de WhatsApp (`wa.me`, incluido también como botón flotante) ya están conectados a los datos de contacto encontrados en tus archivos — confirma que sigan vigentes.

**Nota:** no generé ni tengo acceso a tu cuenta de Mercado Pago — eso debes hacerlo tú directamente en su plataforma, ya que implica datos de tu negocio y cuenta bancaria.

## 8. Checklist antes de activar la venta pública

- [ ] Generar la liga real de Mercado Pago y seguir los pasos de la sección 7 para activar los 2 botones de compra (hoy deshabilitados) y el `schema.org`.
- [ ] Definir y sustituir `[Precio regular posterior pendiente]` en las 3 ubicaciones donde aparece (Boletos, FAQ, CTA final).
- [ ] Completar la sección `#networking` con 2–3 casos reales de alianzas o proyectos de la edición 2024, autorizados por las personas/organizaciones involucradas.
- [ ] Confirmar `[Horario por confirmar]` y `[Sede / detalles logísticos por completar]` (modalidad).
- [ ] Confirmar `[Patrocinadores por confirmar]` con los nombres reales que autoricen aparecer.
- [ ] Confirmar que el correo, WhatsApp e Instagram de contacto sigan vigentes para 2026.
- [ ] Sustituir las tarjetas de `[Nombre del participante]` / `[Cargo / organización]` con nombres reales confirmados.
- [ ] Completar la agenda definitiva de ambos días (hoy son horarios propuestos entre corchetes).
- [ ] Reemplazar `[LinkedIn de SEED]` o eliminar ese enlace del footer si no aplica.
- [ ] Revisar el sitio en móvil y escritorio antes de compartir la liga.
- [ ] (Opcional) Sustituir `logo-seed.svg` por el archivo oficial del logo si está disponible en alta resolución.
- [ ] Si cambian las fechas de la etapa Early Bird, ajustar `EARLY_BIRD_START` y `EARLY_BIRD_END` en `script.js`.

## 9. Cuenta regresiva, precio Early Bird, conteo de visitantes y botón de WhatsApp

**Cuenta regresiva de la etapa Early Bird (hero + sección Boletos):** el mismo widget aparece dos veces en la página y ambas copias se actualizan juntas. Cada estado muestra un texto principal y un mensaje complementario (`data-countdown-subcaption`):

- Antes del 20 de julio de 2026 → "Early Bird abre en" / "Prepárate para asegurar tu boleto con precio preferente."
- Del 20 de julio al 31 de agosto de 2026 → "Early Bird termina en" / "El precio Early Bird de $4,200 MXN estará disponible solo durante esta etapa."
- Después del 31 de agosto de 2026 → "Early Bird finalizó" / "El precio Early Bird ya no está disponible. Consulta la etapa vigente de registro." (la cuenta se detiene en ceros).

Las fechas viven en `script.js`:

```js
var EARLY_BIRD_START = new Date("2026-07-20T00:00:00-06:00").getTime();
var EARLY_BIRD_END = new Date("2026-08-31T23:59:59-06:00").getTime();
```

Si la etapa Early Bird cambia de fechas, ajusta estas dos líneas y el resto de la página se actualiza sola (ambas copias del contador, el mensaje y el estado "finalizado").

**Sección Boletos (`#boletos`):** muestra el precio ancla (~~$7,000 MXN~~, tachado) contra el precio Early Bird ($4,200 MXN), la cuenta regresiva y el botón de compra. Es la sección diseñada para convertir: aparece justo después del hero, antes que cualquier otro contenido.

**Conteo de visitantes (footer):** usa [CounterAPI](https://counterapi.dev), un servicio externo, gratuito y sin registro que incrementa un número cada vez que alguien carga la página. No requiere backend propio ni cuenta de pago. El namespace usado es `seed-2026-oscarjoel1990` y el contador `visitas` (línea correspondiente en `script.js`). Ten en cuenta:

- El contador sube también con tus propias visitas de prueba; no distingue visitantes únicos de recargas.
- Es un servicio de terceros fuera de tu control: si algún día deja de responder, el sitio simplemente muestra un guion (`—`) en vez de un número, sin romper el resto de la página.
- Si prefieres no depender de un servicio externo, puedes quitar el bloque completo (HTML del footer + el bloque "Conteo de visitantes" en `script.js`) sin afectar nada más del sitio.

**Botón flotante de WhatsApp:** aparece fijo en la esquina inferior derecha en todas las páginas y se mantiene visible al hacer scroll. Usa el mismo número que el botón de la sección Registro (`+52 56 1133 9050`). Para cambiarlo, edita el `href="https://wa.me/..."` en el bloque `<a class="whatsapp-float">` dentro de `index.html` (justo antes del `<div class="mobile-cta">`).

## 10. Nota importante

Este es un sitio **100% estático**: no tiene backend, base de datos ni almacenamiento de datos de los usuarios. Cualquier "envío" de formulario debe resolverse con un servicio externo (Google Forms, Tally, etc.) o mediante correo/WhatsApp, tal como está configurado.
