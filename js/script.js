document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-registro');
  if (!form) return;
  const errorMsg = document.getElementById('mensaje-error');
  const successMsg = document.getElementById('mensaje-exito');

  function limpiarEstilos() {
    form.querySelectorAll('input').forEach(el => {
      el.style.border = '';
      el.style.background = '';
    });
  }

  function marcarError(id) {
    const campo = document.getElementById(id);
    campo.style.border = '2px solid #dc3545';
    campo.style.background = '#ffe7e9';
  }

  function mostrarError(msg, campos = []) {
    limpiarEstilos();
    errorMsg.style.display = 'block';
    errorMsg.textContent = msg;
    successMsg.style.display = 'none';
    campos.forEach(marcarError);
  }

  function mostrarExito(msg) {
    limpiarEstilos();
    errorMsg.style.display = 'none';
    successMsg.style.display = 'block';
    successMsg.textContent = msg;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    limpiarEstilos();

    const nombre = document.getElementById('nombre').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const fecha = document.getElementById('fecha').value;
    const consent = document.getElementById('consent');

    let errores = [];

    if (!nombre) errores.push('nombre');
    if (!usuario) errores.push('usuario');
    if (!email) errores.push('email');
    if (!password) errores.push('password');
    if (!password2) errores.push('password2');
    if (!fecha) errores.push('fecha');
    if (!consent.checked) errores.push('consent');

    if (errores.length > 0) {
      mostrarError("Completa todos los campos obligatorios.", errores);
      return;
    }
   
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
      mostrarError("Correo electrónico inválido.", ['email']);
      return;
    }
 
    if (password !== password2) {
      mostrarError("Las contraseñas no coinciden.", ['password', 'password2']);
      return;
    }

    if (password.length < 6 || password.length > 18) {
      mostrarError("La contraseña debe tener entre 6 y 18 caracteres.", ['password']);
      return;
    }
    if (!/[A-Z]/.test(password)) {
      mostrarError("La contraseña debe tener al menos una letra mayúscula.", ['password']);
      return;
    }
    if (!/[0-9]/.test(password)) {
      mostrarError("La contraseña debe tener al menos un número.", ['password']);
      return;
    }
 
    const fechaNac = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    if (edad < 13) {
      mostrarError("Debes tener al menos 13 años para registrarte.", ['fecha']);
      return;
    }
   
    mostrarExito("¡Registro exitoso!");
    form.reset();
  });


  form.querySelectorAll('input').forEach(el => {
    el.addEventListener('input', () => {
      el.style.border = '';
      el.style.background = '';
      errorMsg.style.display = 'none';
    });
  });

  form.addEventListener('reset', function() {
    limpiarEstilos();
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';
  });
});
