/* ==========================================================================
   SEED 2026 — Landing page
   JavaScript vanilla, sin dependencias externas.
   Funciones: menú móvil, acordeón de FAQ y animaciones sutiles al hacer scroll.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Menú móvil ---- */
  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    if (mainNav) {
      mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          header.classList.remove("nav-open");
          navToggle.setAttribute("aria-expanded", "false");
          navToggle.setAttribute("aria-label", "Abrir menú");
        });
      });
    }
  }

  /* ---- Acordeón de FAQ ---- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var button = item.querySelector(".faq-question");
    if (!button) return;
    button.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      faqItems.forEach(function (other) {
        other.classList.remove("open");
        var otherButton = other.querySelector(".faq-question");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Cuenta regresiva de la etapa Early Bird ----
     Hay dos copias del mismo widget en la página (hero + sección Boletos);
     ambas se actualizan a la vez porque se seleccionan con querySelectorAll.
     Estados:
       1) Antes del 20 de julio  → "El precio Early Bird comienza en:"
       2) 20 jul – 31 ago        → "El precio Early Bird termina en:"
       3) Después del 31 de ago  → mensaje de cierre, cuenta detenida.
     Si las fechas de la etapa Early Bird cambian, ajusta estas dos constantes. */
  var EARLY_BIRD_START = new Date("2026-07-20T00:00:00-06:00").getTime();
  var EARLY_BIRD_END = new Date("2026-08-31T23:59:59-06:00").getTime();

  var countdownWidgets = document.querySelectorAll("[data-countdown-widget]");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function setCountdownValues(days, hours, minutes, seconds) {
    document.querySelectorAll('[data-cd="days"]').forEach(function (el) {
      el.textContent = pad(days);
    });
    document.querySelectorAll('[data-cd="hours"]').forEach(function (el) {
      el.textContent = pad(hours);
    });
    document.querySelectorAll('[data-cd="minutes"]').forEach(function (el) {
      el.textContent = pad(minutes);
    });
    document.querySelectorAll('[data-cd="seconds"]').forEach(function (el) {
      el.textContent = pad(seconds);
    });
  }

  function setCountdownCaption(text) {
    document.querySelectorAll("[data-countdown-caption]").forEach(function (el) {
      el.textContent = text;
    });
  }

  function updateCountdown() {
    if (!countdownWidgets.length) return;

    var now = new Date().getTime();
    var diff;
    var caption;
    var isPast = false;

    if (now < EARLY_BIRD_START) {
      diff = EARLY_BIRD_START - now;
      caption = "El precio Early Bird ($4,200 MXN) comienza en:";
    } else if (now <= EARLY_BIRD_END) {
      diff = EARLY_BIRD_END - now;
      caption = "El precio Early Bird ($4,200 MXN) termina en:";
    } else {
      diff = 0;
      isPast = true;
      caption = "La etapa Early Bird ha finalizado";
    }

    if (isPast) {
      setCountdownValues(0, 0, 0, 0);
      setCountdownCaption(caption);
      countdownWidgets.forEach(function (widget) {
        widget.classList.add("is-past");
        widget.setAttribute("aria-label", "La etapa Early Bird ha finalizado");
      });
      clearInterval(countdownTimer);
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);

    setCountdownValues(days, hours, minutes, seconds);
    setCountdownCaption(caption);
  }

  var countdownTimer;
  if (countdownWidgets.length) {
    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);
  }

  /* ---- Conteo de visitantes ----
     Usa CounterAPI (api.counterapi.dev), un servicio externo gratuito y sin
     registro que incrementa un contador cada vez que alguien carga la
     página. No hay backend propio. Si el servicio no responde, se muestra
     un guion. Ver README.md → "Conteo de visitantes" para cambiarlo o
     quitarlo. */
  var visitorCountEl = document.getElementById("visitor-count");
  if (visitorCountEl) {
    fetch("https://api.counterapi.dev/v1/seed-2026-oscarjoel1990/visitas/up")
      .then(function (response) {
        if (!response.ok) throw new Error("counterapi request failed");
        return response.json();
      })
      .then(function (data) {
        if (data && typeof data.count === "number") {
          visitorCountEl.textContent = data.count.toLocaleString("es-MX");
        }
      })
      .catch(function () {
        visitorCountEl.textContent = "—";
      });
  }

  /* ---- Animaciones discretas al hacer scroll ---- */
  var animatedEls = document.querySelectorAll("[data-animate]");

  if ("IntersectionObserver" in window && animatedEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animatedEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
})();
