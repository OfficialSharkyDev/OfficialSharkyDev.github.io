const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
const narrow = matchMedia('(max-width: 760px)');
function toggle(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.hidden = narrow.matches && !open;
}
function layout() {
  menu.hidden = !narrow.matches;
  toggle(false);
}
menu.addEventListener('click', () => toggle(menu.getAttribute('aria-expanded') === 'false'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    toggle(false);
    menu.focus();
  }
});
narrow.addEventListener('change', layout);
layout();
