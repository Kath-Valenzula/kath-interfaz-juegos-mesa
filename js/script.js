document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

const form = document.querySelector('#contact form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const btn = this.querySelector('button');
  btn.classList.add('send-pulse');
  setTimeout(() => btn.classList.remove('send-pulse'), 300);
  let banner = document.querySelector('.success-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.className = 'success-banner';
    banner.textContent = '¡Mensaje enviado con éxito!';
    document.body.appendChild(banner);
  }
  banner.classList.add('show');
  this.reset();
});
