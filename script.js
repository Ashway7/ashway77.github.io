// Navigation toggle for mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked (use event delegation)
  navMenu.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});