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

  /* ---- Cuenta regresiva ---- */
  // Fecha objetivo: 17 de octubre de 2026, 00:00h, Ciudad de México (UTC-6).
  // Cuando se confirme el horario exacto del encuentro, actualiza esta constante.
  var COUNTDOWN_TARGET = new Date("2026-10-17T00:00:00-06:00").getTime();

  var countdownEl = document.getElementById("countdown");
  var cdDays = document.getElementById("cd-days");
  var cdHours = document.getElementById("cd-hours");
  var cdMinutes = document.getElementById("cd-minutes");
  var cdSeconds = document.getElementById("cd-seconds");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function updateCountdown() {
    if (!countdownEl || !cdDays || !cdHours || !cdMinutes || !cdSeconds) return;

    var now = new Date().getTime();
    var diff = COUNTDOWN_TARGET - now;

    if (diff <= 0) {
      cdDays.textContent = "00";
      cdHours.textContent = "00";
      cdMinutes.textContent = "00";
      cdSeconds.textContent = "00";
      countdownEl.classList.add("is-past");
      countdownEl.setAttribute("aria-label", "SEED 2026 ya ha comenzado");
      clearInterval(countdownTimer);
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);

    cdDays.textContent = pad(days);
    cdHours.textContent = pad(hours);
    cdMinutes.textContent = pad(minutes);
    cdSeconds.textContent = pad(seconds);
  }

  var countdownTimer;
  if (countdownEl) {
    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);
  }

  /* ---- Conteo de visitantes ----
     Usa countapi.xyz, un servicio externo gratuito y sin registro que
     incrementa un contador cada vez que alguien carga la página. No hay
     backend propio. Si el servicio no responde, se muestra un guion.
     Ver README.md → "Conteo de visitantes" para cambiarlo o quitarlo. */
  var visitorCountEl = document.getElementById("visitor-count");
  if (visitorCountEl) {
    fetch("https://api.countapi.xyz/hit/seed-2026-oscarjoel1990/visitas")
      .then(function (response) {
        if (!response.ok) throw new Error("countapi request failed");
        return response.json();
      })
      .then(function (data) {
        if (data && typeof data.value === "number") {
          visitorCountEl.textContent = data.value.toLocaleString("es-MX");
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
