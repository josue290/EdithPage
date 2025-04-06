// Base de datos de productos (puede reemplazarse por un JSON externo luego)
const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        descripcion: "Descripción breve del producto.",
        precio: 50,
        disponible: true,
        imagen: "img/producto1.jpg"
    },
    {
        id: 2,
        nombre: "Producto 2",
        descripcion: "Otra descripción aquí.",
        precio: 30,
        disponible: false,
        imagen: "img/producto2.jpg"
    }
];

// Cargar productos en el HTML
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="fw-bold">Precio: $${producto.precio}</p>
                        <button class="btn btn-primary">Comprar</button>
                        <span class="badge ${producto.disponible ? 'bg-success' : 'bg-danger'}">
                            ${producto.disponible ? 'Disponible' : 'Agotado'}
                        </span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productoHTML;
    });

    // Manejar formulario de contacto
    const contactoForm = document.getElementById('contacto-form');
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado. ¡Gracias!');
        contactoForm.reset();
    });
});



// Ejemplo de carga con fetch (crea un archivo productos.json en la misma carpeta)
fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        // Reemplaza el array local por los datos del JSON
        productos = data;
        cargarProductos(); // Llama a la función que genera el HTML
    });