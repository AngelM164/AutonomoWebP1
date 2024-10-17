// Seleccionar el elemento del nombre del usuario
const userName = document.getElementById('user-name');

// Crear un evento para cuando el mouse pase por encima
userName.addEventListener('mouseover', function() {
    userName.style.color = '#ff5722'; // Cambiar el color del texto
    showTooltip(); // Mostrar el tooltip
});

// Crear un evento para cuando el mouse salga
userName.addEventListener('mouseout', function() {
    userName.style.color = ''; // Restaurar el color original
    hideTooltip(); // Ocultar el tooltip
});

// Función para mostrar el tooltip (mensaje emergente)
function showTooltip() {
    let tooltip = document.getElementById('tooltip');
    if (!tooltip) {
        tooltip = document.createElement('span');
        tooltip.id = 'tooltip';
        tooltip.textContent = 'Perfil de Usuario'; // Mensaje del tooltip
        document.body.appendChild(tooltip);
    }
    tooltip.style.display = 'block';
    tooltip.style.left = (userName.getBoundingClientRect().left + window.scrollX) + 'px';
    tooltip.style.top = (userName.getBoundingClientRect().top + window.scrollY + 25) + 'px';
}

// Función para ocultar el tooltip
function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}