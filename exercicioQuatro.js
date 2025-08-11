/*Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula IMC = peso /
altura². */

var peso = parseFloat(prompt("Digite seu peso"))
var altura = parseFloat(prompt(" Digite sua altura"))

var alt2 =  altura **2
var imc = peso / alt2

alert(`18,5 a 24,9 Peso normal\n25 a 29,9 Sobrepeso\n30 a 34,9 Obesidade grau I\n35 a 39,9 Obesidade grau II\nO seu imc é ${imc.toFixed(1)}`)
