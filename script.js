const rootPath = window.location.pathname.includes('/HTML/') ? '../' : './';

const sharedHeaderMarkup = `
  <div class="site-header-inner">
    <a class="logo" href="${rootPath}index.html">
      <img src="${rootPath}Images/busihunt_logo.png" alt="BusiHunt logo" />
    </a>
    <button class="menu-toggle" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
    </button>
    <nav class="main-nav">
      <a href="${rootPath}index.html">Home</a>
      <a href="${rootPath}HTML/About.html">About</a>
      <a href="${rootPath}HTML/Pondicherry-Chapter.html">Find a Chapter</a>
      <a href="${rootPath}HTML/Team.html">Team</a>
      <a href="${rootPath}HTML/Gallery.html">Gallery</a>
      <a href="${rootPath}HTML/contact.html">Contact</a>
    </nav>
  </div>
`;

const sharedFooterMarkup = `
  <div class="site-footer-inner">
    <div class="footer-brand">
      <img src="${rootPath}Images/busihunt_logo.png" alt="BusiHunt logo" />
      <p>Empowering referral-driven business growth in Pondicherry.</p>
    </div>
    <div class="footer-links">
      <a href="${rootPath}index.html">Home</a>
      <a href="${rootPath}HTML/About.html">About</a>
      <a href="${rootPath}HTML/Pondicherry-Chapter.html">Chapters</a>
      <a href="${rootPath}HTML/contact.html">Contact</a>
    </div>
    <p class="footer-copy">Copyright © 2026 BusiHunt. All rights reserved.</p>
  </div>
`;

function injectSharedLayouts() {
  const headerPlaceholder = document.querySelector('header[data-inject="shared"]');
  const footerPlaceholder = document.querySelector('footer[data-inject="shared"]');

  if (headerPlaceholder) {
    headerPlaceholder.classList.add('site-header');
    headerPlaceholder.innerHTML = sharedHeaderMarkup;
  }

  if (footerPlaceholder) {
    footerPlaceholder.classList.add('site-footer');
    footerPlaceholder.innerHTML = sharedFooterMarkup;
  }
}

function initMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) {
      mainNav.classList.remove('open');
    }
  });
}

function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop().toLowerCase();
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop().toLowerCase();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initContactForm() {
  const contactForm = document.querySelector('.contact-form form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name?.value.trim() || '';
    const email = event.target.email?.value.trim() || '';
    if (name && email) {
      alert(`Thank you, ${name}! Your request has been received.`);
      event.target.reset();
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  injectSharedLayouts();
  initMenuToggle();
  setActiveNav();
  initContactForm();
});
