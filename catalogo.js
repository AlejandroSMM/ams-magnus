/* ============================================================
   CATÁLOGO AMS MAGNUS
   Aquí cambias nombres, precios y fotos. Es el ÚNICO lugar.
   fotos: [frente, espalda]
   inicio: true  -> sale también en "Lo que ya salió" (página principal)
   ============================================================ */
const TELEFONO = '593979187799';

const CATALOGO = [
    { id: 'black',          nombre: 'Black',           fotos: ['5.jpg', '6.jpg'],   inicio: true },
    { id: 'beige',          nombre: 'Beige',           fotos: ['17.jpg', '18.jpg'], inicio: true },
    { id: 'guayaquil-rojo', nombre: 'Guayaquil Rojo',  fotos: ['9.jpg', '10.jpg'],  inicio: true },
    { id: 'table-of-grace', nombre: 'Table of Grace',  fotos: ['7.jpg', '8.jpg'],   inicio: true },
    { id: 'guayaquil-gris', nombre: 'Guayaquil Gris',  fotos: ['11.jpg', '12.jpg'] },
    { id: 'logo-blanco',    nombre: 'Logo Blanco',     fotos: ['1.jpg', '2.jpg'] },
    { id: 'doberman',       nombre: 'Doberman',        fotos: ['19.jpg', '20.jpg'] },
    { id: 'doom',           nombre: 'Doom',            fotos: ['3.jpg', '4.jpg'] },
    { id: 'symbiote',       nombre: 'Symbiote',        fotos: ['13.jpg', '14.jpg'] },
    { id: 'black-mamba',    nombre: 'Black Mamba',     fotos: ['15.jpg', '16.jpg'] }
];

/* ---------- Código que dibuja las páginas (no hace falta tocarlo) ---------- */
(function () {
    function linkWhatsApp(nombre) {
        return 'https://wa.me/' + TELEFONO + '?text=' + encodeURIComponent('Hola, quiero la camiseta ' + nombre);
    }

    function tarjeta(c) {
        return `
        <article class="producto">
            <a class="tarjeta-link" href="camiseta.html?id=${c.id}">
                <div class="foto"><img src="${c.fotos[0]}" alt="Camiseta ${c.nombre}, frente" loading="lazy"></div>
                <h3>${c.nombre}</h3>
  
            </a>
            <a href="${linkWhatsApp(c.nombre)}" class="btn">Pedir por WhatsApp</a>
        </article>`;
    }

    // index.html: "Lo que ya salió"
    const gridInicio = document.getElementById('grid-coleccion');
    if (gridInicio) gridInicio.innerHTML = CATALOGO.filter(c => c.inicio).map(tarjeta).join('');

    // modelos.html: todos los modelos
    const gridModelos = document.getElementById('grid-modelos');
    if (gridModelos) gridModelos.innerHTML = CATALOGO.map(tarjeta).join('');

    // panel de menú (en las 3 páginas)
    const navPanel = document.getElementById('panel-catalogo');
    if (navPanel) {
        navPanel.innerHTML = CATALOGO.map(c =>
            `<a href="camiseta.html?id=${c.id}"><img src="${c.fotos[0]}" alt="">${c.nombre}</a>`
        ).join('');
    }

    // camiseta.html: frente y espalda
    const detalle = document.getElementById('detalle');
    if (detalle) {
        const id = new URLSearchParams(location.search).get('id');
        const c = CATALOGO.find(x => x.id === id);
        if (!c) {
            detalle.textContent = 'No encontramos esa camiseta.';
        } else {
            const etiquetas = ['Frente', 'Espalda'];
            document.title = c.nombre + ' | AMS Magnus';
            detalle.innerHTML = `
                <h1 class="titulo-pagina">${c.nombre}</h1>
                <div class="fotos-detalle">
                    ${c.fotos.map((f, i) => `
                    <figure>
                        <img src="${f}" alt="Camiseta ${c.nombre}, ${etiquetas[i].toLowerCase()}">
                        <figcaption>${etiquetas[i]}</figcaption>
                    </figure>`).join('')}
                </div>
                <a href="${linkWhatsApp(c.nombre)}" class="btn">Pedir por WhatsApp</a>`;
        }
    }
})();
