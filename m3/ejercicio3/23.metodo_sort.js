//.sort() -> ordena un array (su orden depende de los datos que tenga el array)

let valores = [1,3,2,5,7,11,10,22,50,100, 4];

//ORDENANDO VALORES NÚMERICOS

//ASC
valores.sort((a, b) => a - b);
console.log(valores);

//DESC
console.log(valores.reverse());

//ORDENAR TEXTOS CONSIDERANDO TÍLDES, Ñ, ETC.
const items = ["réservé", "premier", "communiqué", "café", "Adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

console.log(items);