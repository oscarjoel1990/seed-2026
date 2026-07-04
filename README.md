# SEED 2026 — Landing page del encuentro

Sitio publicado: https://oscarjoel1990.github.io/seed-2026/ — enfocado en venta de boletos: precio Early Bird con ancla de valor, cuenta regresiva, sección de networking/casos de éxito, conteo de visitas, botón de compra vía Mercado Pago y botón flotante de WhatsApp.

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
- Valor de referencia usado como ancla de precio: "más de $7,000 MXN por persona".
- Precio regular después del 31 de agosto: **no me lo diste, así que quedó como placeholder** `[Precio regular después del Early Bird]`. Complétalo en cuanto lo definas (aparece en 3 lugares: sección Boletos, FAQ y CTA final).

**Pendiente — búscalo en el buscador de tu navegador o reemplázalo manualmente (marcado con `[corchetes]` o "No consta" en el código):**
- Horario exacto de cada día.
- Modalidad (presencial / híbrida / virtual).
- Precio regular después del Early Bird.
- Liga de pago de Mercado Pago (ver sección 7).
- Casos de éxito de networking 2024: nombres de la alianza/proyecto, organizaciones involucradas y resultado concreto (sección `#networking`). **No inventé ningún caso** — dejé 3 tarjetas con placeholders para que las completes con historias reales; publicar casos falsos sería publicidad engañosa.
- Nombres y cargos de ponentes/participantes 2026.
- Agenda definitiva (horarios y actividades de la sección `#agenda`).
- URL final del sitio publicado (meta `og:url`).
- Liga de LinkedIn de SEED, si aplica.

## 3. Cómo editar el contenido

Todo el copy vive en `index.html`. Busca el texto entre `[corchetes]` y sustitúyelo directamente. Ejemplos:

- `[Horario] — por confirmar` → escribe el horario real, por ejemplo `9:00 a 15:00 h`.
- `[Liga de pago Mercado Pago]` (aparece 3 veces: hero, sección Boletos y CTA final; más una cuarta vez en `schema.org` del `<head>`) → pega la URL de tu link de pago. Ver sección 7.
- `[Precio regular después del Early Bird]` (aparece en la sección Boletos, FAQ y CTA final) → escribe el precio que aplicará a partir del 1 de septiembre de 2026.
- Tarjetas de `#networking` → sustituye `[Nombre de la alianza o proyecto]`, `[Organizaciones o personas involucradas]` y `[Resultado concreto...]` con casos reales de la edición 2024.
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

## 7. Cómo conectar el botón de compra (Mercado Pago)

GitHub Pages no tiene backend, así que la compra del boleto se resuelve con una **liga de pago de Mercado Pago** — no necesitas programar nada ni instalar un plugin:

1. Entra a tu cuenta de Mercado Pago (una cuenta gratuita es suficiente) en [mercadopago.com.mx](https://www.mercadopago.com.mx).
2. En el menú, busca **Cobrar → Link de pago**.
3. Da clic en **"Ingresar monto"**, escribe `$4,200 MXN` y el título que verá quien compre, por ejemplo "Boleto SEED 2026 — Early Bird".
4. Opcionalmente agrega una imagen, elige los medios de pago que aceptas y configura el **vencimiento del link** (por ejemplo, el 31 de agosto de 2026, para que deje de estar activo cuando termine el Early Bird) y la página a la que se redirige a la persona después de pagar.
5. Da clic en **"Crear Link de pago"** y copia la URL generada (se ve como `https://mpago.la/xxxxxxx`).
6. En `index.html`, busca `[Liga de pago Mercado Pago]` (aparece 3 veces: botón del hero, sección **Boletos** y el CTA final) y sustitúyelo por esa URL en las 3 ubicaciones.
7. Actualiza también el mismo placeholder dentro del bloque `schema.org` (`<script type="application/ld+json">`) en el `<head>`.

Crear un Link de pago no tiene costo; Mercado Pago solo cobra su comisión habitual cuando se concreta una venta.

Con esto, comprar un boleto toma **un solo clic**: la persona sale del sitio directo al checkout seguro de Mercado Pago (Visa, Mastercard, transferencia SPEI, etc.), sin formularios intermedios de tu parte.

Como alternativa o complemento, el botón de correo (`mailto:`) y el botón de WhatsApp (`wa.me`, incluido también como botón flotante) ya están conectados a los datos de contacto encontrados en tus archivos — confirma que sigan vigentes, por si alguien prefiere pagar por transferencia directa o tiene dudas antes de comprar.

**Nota:** no generé ni tengo acceso a tu cuenta de Mercado Pago — eso debes hacerlo tú directamente en su plataforma, ya que implica datos de tu negocio y cuenta bancaria.

## 8. Checklist antes de publicar

- [ ] Sustituir `[Liga de pago Mercado Pago]` en las **4 ubicaciones** donde aparece (hero, sección Boletos, CTA final, `schema.org`).
- [ ] Definir y sustituir `[Precio regular después del Early Bird]` en las 3 ubicaciones donde aparece.
- [ ] Completar la sección `#networking` con 2–3 casos reales de alianzas o proyectos de la edición 2024 (nombre, organizaciones, resultado).
- [ ] Confirmar horario y modalidad (o marcar "entrada libre" si ese fuera el caso).
- [ ] Confirmar que el correo, WhatsApp e Instagram de contacto sigan vigentes para 2026.
- [ ] Sustituir las tarjetas de participantes con nombres reales, si ya están confirmados.
- [ ] Completar la agenda definitiva de ambos días.
- [ ] Reemplazar `[URL del sitio publicado]` con la URL real de GitHub Pages.
- [ ] Reemplazar `[LinkedIn de SEED]` o eliminar ese enlace del footer si no aplica.
- [ ] Revisar el sitio en móvil y escritorio antes de compartir la liga.
- [ ] (Opcional) Sustituir `logo-seed.svg` por el archivo oficial del logo si está disponible en alta resolución.
- [ ] Si cambian las fechas de la etapa Early Bird, ajustar `EARLY_BIRD_START` y `EARLY_BIRD_END` en `script.js`.

## 9. Cuenta regresiva, precio Early Bird, conteo de visitantes y botón de WhatsApp

**Cuenta regresiva de la etapa Early Bird (hero + sección Boletos):** el mismo widget aparece dos veces en la página y ambas copias se actualizan juntas. Cambia de mensaje solo según la fecha:

- Antes del 20 de julio de 2026 → "El precio Early Bird comienza en:"
- Del 20 de julio al 31 de agosto de 2026 → "El precio Early Bird termina en:"
- Después del 31 de agosto de 2026 → "La etapa Early Bird ha finalizado" (la cuenta se detiene en ceros).

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
