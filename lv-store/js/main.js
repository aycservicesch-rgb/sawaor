(function () {
  "use strict";
  var B = window.__BRAND__ || {};
  var IG = "https://instagram.com/" + (B.instagram || "lv_store_py");

  function safe(fn) { try { fn(); } catch (e) { if (window.console) console.warn(e); } }

  function waLink(msg) {
    var num = String(B.whatsapp || "").replace(/\D/g, "");
    if (!num) return IG;
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
  }

  function toast(text) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = text;
    t.classList.add("is-show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove("is-show"); }, 2600);
  }

  // Generic WhatsApp buttons
  safe(function () {
    document.querySelectorAll(".js-wa").forEach(function (a) {
      a.href = waLink(a.getAttribute("data-msg") || "¡Hola LV Store!");
    });
  });

  // Product cards: size selection + order message
  safe(function () {
    document.querySelectorAll(".card").forEach(function (card) {
      var size = null;
      var btn = card.querySelector(".js-order");
      var name = card.getAttribute("data-name");
      var price = card.getAttribute("data-price");

      function update() {
        var msg = "¡Hola LV Store! 👟 Quiero pedir: " + name +
          (size ? " — talle " + size : "") +
          (price && price !== "consultar" ? " (" + price + ")" : "") +
          ". ¿Está disponible?";
        btn.href = waLink(msg);
      }

      var sizes = card.querySelectorAll(".sizes button");
      sizes.forEach(function (b) {
        b.type = "button";
        b.setAttribute("role", "radio");
        b.setAttribute("aria-checked", "false");
        b.addEventListener("click", function () {
          sizes.forEach(function (x) { x.classList.remove("is-on"); x.setAttribute("aria-checked", "false"); });
          b.classList.add("is-on");
          b.setAttribute("aria-checked", "true");
          size = b.textContent.trim();
          update();
        });
      });
      if (sizes.length === 1) sizes[0].click();

      btn.addEventListener("click", function (e) {
        if (!size && sizes.length > 1) {
          e.preventDefault();
          toast("Elegí tu talle primero 👆");
          card.querySelector(".sizes").scrollIntoView({ block: "center", behavior: "smooth" });
        }
      });
      update();
    });
  });

  // Category filters
  safe(function () {
    var chips = document.querySelectorAll(".chip");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var f = c.getAttribute("data-filter");
        chips.forEach(function (x) { x.classList.toggle("is-active", x === c); });
        document.querySelectorAll(".card").forEach(function (card) {
          card.hidden = !(f === "todo" || card.getAttribute("data-cat") === f);
        });
      });
    });
  });

  // Size finder
  safe(function () {
    var input = document.getElementById("cm");
    var out = document.getElementById("size-result");
    var rows = Array.prototype.slice.call(document.querySelectorAll(".size-table tbody tr"));
    input.addEventListener("input", function () {
      var cm = parseFloat(String(input.value).replace(",", "."));
      rows.forEach(function (r) { r.classList.remove("is-match"); });
      if (!cm || cm < 21 || cm > 31) { out.textContent = "Ingresá una medida entre 21 y 31 cm."; return; }
      var match = rows[rows.length - 1];
      for (var i = 0; i < rows.length; i++) {
        if (parseFloat(rows[i].cells[0].textContent) >= cm) { match = rows[i]; break; }
      }
      match.classList.add("is-match");
      out.innerHTML = "Tu talle es <strong>" + match.cells[1].textContent + "</strong> (EUR " + match.cells[2].textContent + ").";
    });
  });

  // Reveal on scroll (content always visible as fallback)
  safe(function () {
    if (!("IntersectionObserver" in window)) return;
    var els = document.querySelectorAll(".why article, .card, .new-card, .reviews blockquote");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.05 });
    els.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
    setTimeout(function () { els.forEach(function (el) { el.classList.add("is-in"); }); }, 2500);
  });

  safe(function () { document.getElementById("year").textContent = new Date().getFullYear(); });
})();
