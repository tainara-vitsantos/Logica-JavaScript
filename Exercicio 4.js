//4)	Faça um algoritmo que leia 4 números, calcule e mostre a soma dos três primeiros números multiplicado pelo último número;

var n1 = parseInt( prompt("Digite o primeiro número"))
var n2 = parseInt( prompt("Digite o segundo número"))
var n3 = parseInt( prompt("Digite o terceiro número"))
var n4 = parseInt( prompt("Digite o quarto número"))

var soma = n1 + n2 + n3 
var mult = soma * n4

alert(` A soma dos três primeiros números é: ${soma}\nE a multiplicação do resultado da soma, vezes o quarto número é: ${mult}`)

  