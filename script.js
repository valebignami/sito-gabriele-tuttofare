/* Gabriele — comportamenti della pagina.
   Tre cose sole: la barra in alto che si opacizza, l'ingresso dell'hero,
   e i filetti del percorso che si tracciano quando entrano nello schermo. */

(function () {
  'use strict';

  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- barra in alto --- */
  var topbar = document.getElementById('topbar');

  function aggiornaTopbar() {
    topbar.classList.toggle('is-stuck', window.scrollY > 24);
  }

  if (topbar) {
    aggiornaTopbar();
    window.addEventListener('scroll', aggiornaTopbar, { passive: true });
  }

  /* --- ingresso dell'hero: un solo momento, orchestrato --- */
  var saliti = document.querySelectorAll('[data-rise]');

  function mostraHero() {
    for (var i = 0; i < saliti.length; i++) saliti[i].classList.add('is-in');
  }

  if (ridotto) {
    mostraHero();
  } else {
    requestAnimationFrame(function () { requestAnimationFrame(mostraHero); });
  }

  /* --- filetti del percorso --- */
  var passi = document.querySelectorAll('.step');

  if (ridotto || !('IntersectionObserver' in window)) {
    for (var j = 0; j < passi.length; j++) passi[j].classList.add('is-in');
  } else {
    var osservatore = new IntersectionObserver(function (voci) {
      voci.forEach(function (voce) {
        if (voce.isIntersecting) {
          voce.target.classList.add('is-in');
          osservatore.unobserve(voce.target);
        }
      });
    }, { threshold: 0.35, rootMargin: '0px 0px -8% 0px' });

    for (var k = 0; k < passi.length; k++) osservatore.observe(passi[k]);
  }
})();
