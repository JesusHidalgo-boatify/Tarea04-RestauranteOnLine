/**
 * RESTAURANTE ONLINE
 */


// DECLARACIÓN VARIABLES ------------------------------------

let codigoCliente = Math.floor(Math.random() * 3); // imitamos la introducción de un codigo de cliente
let _pedido = [];
let $codigoProducto = "";



// DECLARACIÓN DE FUNCIONES ---------------------------------

// función para mostrar el menú inicial

const mostrarMenu = () => {
    console.log(
        `Bienvenido ${_USUARIOS[codigoCliente].nombre}! Elige tu menú:`
    );
    console.log('     ("FIN" para terminar)');
    console.log(" ");
    console.log(`COD\t\t  PLATO\t\t\tPRECIO`);
    console.log(`-------------------------------`);
    _CARTA.forEach((plato) => {
        console.log(`${plato.cod}\t\t  ${plato.nombre}\t\t${plato.precio}€`);
    });
};

// función para validar el código del producto introducido y actualizar pedido

const validarCodigoProducto = (cod) => {
    if (cod == "FIN") return;

    //si no introduce nada
    if (!cod) return alert("No puede dejar este campo en blanco");

    //buscar el código de producto introducido en la base de datos (array _CARTA)
    productoEncontrado = _CARTA.find((producto) => producto.cod === cod);

    //Si el código de producto introducido no existe
    if (!productoEncontrado) {
        alert("Código desconocido. Por favor, introduzca un código válido.");
        return;
    }

    // Si hemos llegado hasta aquí, el código es correcto y se añade al pedido actual del cliente
    _pedido.push(productoEncontrado);
    alert(`Has seleccionado ${productoEncontrado.nombre}`);
    return;
};

// función para calcular el total del pedido realizado

const calculaTotal = () => {
    totalPedido = 0;
    for (producto of _pedido) {
        totalPedido += producto.precio;
    }
    return totalPedido;
};

// función para mostrar el ticket del pedido para el cliente

const mostrarTicket = () => {
    let __fecha = new Date(); //inicializamos la fecha
    console.log(
        `\n${_USUARIOS[codigoCliente].nombre}, aquí tienes tu pedido:\n`
    );

    // detallamos el nombre y precio de cada producto solicitado
    _pedido.forEach((producto) => {
        console.log(`${producto.nombre}\t${producto.precio}€`);
    });

    // imprimimos el valor total del pedido
    console.log(`TOTAL: ${calculaTotal()}€`);

    // imprimimos el codigo de cliente y la fecha
    console.log(
        _USUARIOS[codigoCliente].codigo + " | " + __fecha.toDateString()
    );
    console.log(`\n¡Buen provecho!`);
};

//---------------- P R O G R A M A C I Ó N -----------------------------

// Bienvenida y menú de opciones 
mostrarMenu();

// Introducción de códigos de productos
do {
    // se pide que introduzca un codigo de producto y lo convertimos en mayúsculas
    $codigoProducto = prompt(
        `${_USUARIOS[codigoCliente].nombre}, introduce el código del producto elegido:`
    ).toUpperCase();

    //validamos el código introducido
    validarCodigoProducto($codigoProducto);

    // repetimos hasta que el cliente introduzca 'fin'
} while ($codigoProducto !== "FIN");


//se muestra al cliente el ticket del pedido realizado
mostrarTicket();


//end