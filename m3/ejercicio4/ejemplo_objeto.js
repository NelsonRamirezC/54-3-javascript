let persona = {
    estatura: "1.65",
    peso: 65.3,
    hobbies: ["Cantar", "Bailar", "Viajar por el mundo"],
    hobbiesStr: function(){
        return this.hobbies.join(", ");
    }
}

console.log("Estatura:", persona.estatura); //notación de punto
console.log("Peso:", persona["peso"]); //notación de []
console.log("Hobbies:", persona.hobbiesStr());