let numero = parseInt(prompt("Ingresa los minutos"))

let horas = numero/60
let minutos = numero %60

alert("El total de horas es "  + Math.floor(horas) +  " horas y de minutos fue " +minutos)