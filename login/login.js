function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar formato de correo
    return emailRegex.test(email);
}

// Función para validar la contraseña (mínimo 6 caracteres)
function validarPassword(password) {
    return password.length >= 6;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener los valores de los inputs
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar el formato del correo
    if (!validarEmail(email)) {
        document.getElementById('emailError').textContent = "Por favor, introduce un correo electrónico válido.";
        return;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validar el formato de la contraseña
    if (!validarPassword(password)) {
        document.getElementById('passwordError').textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    // Si todo está correcto, redirigir al usuario a otra página
    window.location.href = "../feed/index.html";
});