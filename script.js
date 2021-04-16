let titulo = "Calculadora let" // escopo global
let numero1 = 0
let numero2 = 0
let resultado = 0

function calcular(operador) { // operador -> + - * /
    numero1 = parseFloat(document.getElementById("num1").value)
    numero2 = parseFloat(document.getElementById("num2").value)
    resultado = numero1 + operador + numero2 // "2+2"
    alert(eval(resultado))
}