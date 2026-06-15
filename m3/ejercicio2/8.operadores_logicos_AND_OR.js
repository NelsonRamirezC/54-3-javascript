//USO DE AND Y OR JUNTOS

//BONO ALIMENTACIÓN:

/*
PERTENECER AL RSH <= 60

EDAD MENOR 18
EDAD MAYOR O IGUAL 65

*/

let RSH = 40;
let edad = 15;

if( RSH <= 60 && (edad < 18 || edad >= 65)){
    console.log("Usted es candidato a bono");
}else {
    console.log("usted no cumple con los requisitos de recibir bono");
};
