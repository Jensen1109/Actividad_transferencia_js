
// le pedimos al usuario que digite el nombre del producto
let producto = prompt("Ingrese el nombre del producto")
// le pedimos al usuario que digite el precio del producto
let precio = prompt("Ingrese el precio del producto")
// le pedimos al usuario que ingrese la cantidad
let cantidad = prompt("Ingrese la cantidad comprada")

// hacemos la operacion para saber cual es el total
let total = cantidad*precio

// Imprimimos el resultado
alert("El total a pagar por " + cantidad + producto + " es " +total)