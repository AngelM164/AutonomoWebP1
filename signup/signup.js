document.getElementById('signupForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validar nombre completo
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');

    if (name.trim() === '') {
        nameError.textContent = 'Por favor, introduce tu nombre completo.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validar correo electrónico
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validar contraseña
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    if (password.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Prevenir el envío del formulario si no es válido
    if (!isValid) {
        event.preventDefault();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Registro exitoso, ya puedes iniciar sesión'); // Muestra la alerta
    });
});