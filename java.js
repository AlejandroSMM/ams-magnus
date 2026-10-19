const btnMenu = document.getElementById('btn-menu');
const panel = document.getElementById('panel');
const fondo = document.getElementById('panel-fondo');

function abrirPanel() {
    panel.classList.add('activo');
    fondo.classList.add('activo');
    btnMenu.setAttribute('aria-expanded', 'true');
}

function cerrarPanel() {
    panel.classList.remove('activo');
    fondo.classList.remove('activo');
    btnMenu.setAttribute('aria-expanded', 'false');
}

btnMenu.addEventListener('click', abrirPanel);
document.getElementById('cerrar-panel').addEventListener('click', cerrarPanel);
fondo.addEventListener('click', cerrarPanel);

// al tocar cualquier link del panel, se cierra y te lleva a esa sección
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrarPanel));

// la tecla Esc también lo cierra
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarPanel();
});