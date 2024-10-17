function showLogin() {
    document.getElementById('../login/index.html').style.display = 'flex';
}

function showSignup() {
    document.getElementById('signup-modal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar modales al hacer clic fuera de ellos
window.onclick = function(event) {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');

    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
}