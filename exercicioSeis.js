/* 6 Escreva um algoritmo que ajude a apurar o resultado da eleição de uma cidade. O
algoritmo deverá ler o número de votos brancos, nulos e válidos. Calcular e escrever o
percentual que cada um representa em relação ao total de eleitores. */

var votosBranco = parseInt(prompt("DIgite a quantidade de votos em branco"))
var votosNulo = parseInt(prompt("DIgite a quantidade de votos nulos"))
var votosValido = parseInt(prompt("DIgite a quantidade de votos válidos"))

var totalVotos = votosBranco + votosNulo + votosValido

var porcentBranco = votosBranco / totalVotos * 100
var porcentNulo = votosNulo / totalVotos * 100
var porcentValido = votosValido / totalVotos * 100

alert(`O total de votos é: ${totalVotos.toFixed(2)}\nSendo, ${porcentValido.toFixed(2)}% de votos válidos;\n${porcentBranco.toFixed(2)}% de votos em branco;\n${porcentNulo.toFixed(2)}% de votos nulos`)