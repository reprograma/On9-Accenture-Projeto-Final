let dataString = "06/12/2020".split("/");

/* Define a data com os valores separados */
let data = new Date(dataString[2], dataString[1]-1, dataString[0]);

console.log( data.toString() );
console.log( data.toLocaleDateString("pt-BR") );