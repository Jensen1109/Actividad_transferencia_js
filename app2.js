// le pedimos al usuario que digite las horas trabajadas
let horas = prompt("Ingrese las horas trabajadas")
// le pedimos al usuario que digite el valor por hora
let valorhoras = prompt("Ingrese el valor por hora")

// hacemos la operacion para calcular el sueldo 
let pago = (horas*valorhoras)*7

// Imprimimos el resultado
alert("El salario semanal del empleado es " +pago)