// le pedimos al usuario que digite los numeros en minutos
let numero = parseInt(prompt("Ingresa los minutos"))
// hacemos la operacion para converitir en horas
let horas = numero/60
// hacemos la operacion para converitir en minutpos
let minutos = numero %60

// Imprimimos el resultado
alert("El total de horas es "  + Math.floor(horas) +  " horas y de minutos fue " +minutos)