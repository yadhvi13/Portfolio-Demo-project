// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
  menuBtn.setAttribute('aria-expanded', expanded);
  mobileNav.classList.toggle('open');
});

// Close mobile menu when clicking links
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Active nav link switching on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const mobileLinks = mobileNav.querySelectorAll('a');

function activateNavLinks() {
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos){
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === section.id){
          link.classList.add('active');
        }
      });
      mobileLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === section.id){
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', activateNavLinks);

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
