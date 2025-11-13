// Basic JS: active nav highlighting, menu toggle, tabs navigation, year fill
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.site-nav .nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === current) a.classList.add('active');
  });

  // Menu toggle for small screens
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.site-nav');
  menuToggle && menuToggle.addEventListener('click', () => {
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Tabs on homepage (and any page) - redirect to target pages
  document.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => {
      const target = t.getAttribute('data-target');
      if(target) window.location.href = target;
    });
  });

  // Fill year placeholders
  const year = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // Placeholder name
  const nameEl = document.getElementById('name-placeholder');
  if(nameEl) { nameEl.textContent = 'Saagar D'; }
});
