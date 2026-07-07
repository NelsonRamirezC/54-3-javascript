const traerDatos = () => {
    return new Promise((resolve, reject) => {
        const personas = ["Pedro", "María", "Josefa"];
        setTimeout(() => {
            resolve(personas);
        }, 5000);
    });
};

console.log("Solicitando datos...");

const promesa = traerDatos();

promesa
    .then((datos) => {
        console.log(datos);
    })
    .finally(() => {
        console.log("Programa terminado...");
    });
