// le pedimos al usuario que digite el valor del producto
let precio = prompt("Ingrese el precio del producto")
// hacemos la operacion para multiplicarlo por el 10%
let prefinal = precio*0.10
// hacemos la operacion para converitir ya el prodducto con su precio final que es el 10%
let preciototal = precio-prefinal

// Imprimimos el resultado
alert("El precio final del producto con el descuento del 10% es de " +prefinal)