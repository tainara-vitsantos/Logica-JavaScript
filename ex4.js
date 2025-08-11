//4.	Implemente um programa que calcule o ano de nascimento de uma pessoa a partir de sua idade e do ano atual.


var idade = parseInt(prompt("digite sua idade"))
var anoAtual = parseInt(prompt("digite o ano atual"))

var anoNascimento = anoAtual - idade

alert(`O ano do nascimento é ${anoNascimento}`)