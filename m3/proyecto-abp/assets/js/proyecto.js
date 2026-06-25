const productos = [];

moment.locale("es");

function crearUUID() {
    return uuidv4();
}

function obtenerFecha() {
    return moment().format("DD/MM/YYYY");
}

class Producto {
    constructor(codigo, nombre, categoria, cantidad, precioUnitario) {
        this.id = crearUUID();
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.fechaIngreso = obtenerFecha();
    }

    total() {
        return this.precioUnitario * this.cantidad;
    }

    guardar() {
        productos.push(this);
    }
}

function inventario(listaProductos = []) {
    console.log(`Total productos registrados (${listaProductos.length}):`);
    if (listaProductos.length == 0) {
        return console.log("NO HAY PRODUCTOS REGISTRADOS.");
    }
    console.log("_".repeat(50));
    for (const producto of listaProductos) {
        let {
            codigo,
            nombre,
            categoria,
            cantidad,
            precioUnitario,
            fechaIngreso,
        } = producto;

        console.log("Código:", codigo);
        console.log("Nombre:", nombre);
        console.log("Categoría:", categoria);
        console.log("Cantidad:", cantidad);
        console.log("Precio Unitario:", precioUnitario);
        console.log("Total:", producto.total());
        console.log("Fecha registro:", fechaIngreso);

        console.log("\n");
        console.log("*".repeat(50));
        console.log("\n");
    }
}

function validarCantidad() {
    let continuar = true;

    let cantidad;

    while (continuar) {
        cantidad = Number(prompt("Ingrese la cantidad de productos Mayor a 0"));

        if (isNaN(cantidad)) {
            alert(
                "Ha ingresado un valor no válido para cantidad, vuelva a intentar.",
            );
        } else if (cantidad <= 0) {
            alert(
                "Ha ingresado una cantidad inferior al mínimo (1 unidad), vuelva a intentar",
            );
        } else {
            continuar = false;
        }
    }

    return cantidad;
}

function validarPrecio() {
    let continuar = true;

    let precio;

    while (continuar) {
        precio = Number(
            prompt("Ingrese el precio del producto (mayor o igual a 0):"),
        );

        if (isNaN(precio)) {
            alert(
                "Ha ingresado un valor no válido para precio, vuelva a intentar.",
            );
        } else if (precio < 0) {
            alert(
                "Ha ingresado un precio inferior al mínimo (0 pesos), vuelva a intentar",
            );
        } else {
            continuar = false;
        }
    }

    return precio;
}

function validarCategoria() {
    let continuar = true;
    let categoria;

    while (continuar) {
        const categorias = ["Frutas", "Verduras", "Carnes", "Lacteos"];

        let mensaje =
            "Ingrese la categoria del producto:\n" +
            `Categorias disponibles: ${categorias.join(", ")}.`;

        categoria = prompt(mensaje);

        //NORMALIZAR A MINÚSCULAS Y QUITAR ESPACIOS PARA VALIDACIONES
        categoria = categoria.toLowerCase().trim();

        switch (categoria) {
            case "frutas":
                categoria = "Frutas";
                continuar = false;
                break;
            case "verduras":
                categoria = "Verduras";
                continuar = false;
                break;
            case "carnes":
                categoria = "Carnes";
                continuar = false;
                break;
            case "lacteos":
                categoria = "Lacteos";
                continuar = false;
                break;

            default:
                alert("Ha ingresado una opción no válida, vuelva a intentar.");
                break;
        }
    }

    return categoria;
}

function agregarProducto() {
    let codigo = prompt("Ingrese el código del producto, ejemplo [1111]:");
    let nombre = prompt("Ingrese el nombre del producto:");
    let categoria = validarCategoria();
    let cantidad = validarCantidad();
    let precioUnitario = validarPrecio();

    const nuevoProducto = new Producto(
        codigo,
        nombre,
        categoria,
        cantidad,
        precioUnitario,
    );

    nuevoProducto.guardar();

    alert("Producto registrado correctamente con el id: " + nuevoProducto.id);
}

function buscarPorCategoria() {
    let continuar = true;

    let categoria;

    let mensaje =
        "Ingrese el número correspondiente a la categoría que desea ver:\n" +
        "1. Frutas.\n" +
        "2. Verduras.\n" +
        "3. Carnes.\n" +
        "4. Lacteos.\n";

    while (continuar) {
        let opcion = prompt(mensaje);

        let objOpciones = {
            1: "Frutas",
            2: "Verduras",
            3: "Carnes",
            4: "Lacteos",
        };

        categoria = objOpciones[opcion];

        if (categoria) {
            continuar = false;
        } else {
            alert("Ha seleccionado una opción inválida, vuelva a intentar.");
        }
    }

    const listaFiltrada = productos.filter((p) => p.categoria == categoria);

    console.log("Filtrando productos por categoría: " + categoria);
    inventario(listaFiltrada);
}

function menu() {
    let mensaje =
        "Ingrese la operacion:\n" +
        "1. Agregar un nuevo producto.\n" +
        "2. Ver inventario.\n" +
        "3. Buscar por categoria.\n" +
        "\nPresiona cualquier tecla para salir del menú.";

    let opcion = prompt(mensaje);

    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            inventario(productos);
            break;
        case "3":
            buscarPorCategoria();
            break;

        default:
            alert("Saliendo del menú...");
            break;
    }
}

function main() {
    menu();
}

//EVENTO BOTÓN INICIAR
const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", () => {
    main();
});

//EVENTO BOTON VER INVENTARIO

const btnVerInventario = document.getElementById("btnVerInventario");

btnVerInventario.addEventListener("click", () => {
    inventario(productos);
});

//EVENTO BOTON LIMPIAR CONSOLA

const btnLimpiarConsola = document.getElementById("btnLimpiarConsola");

btnLimpiarConsola.addEventListener("click", () => {
    console.clear();
});
