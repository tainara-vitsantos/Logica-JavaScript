/* 7 A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa
que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de
dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa
R$90 por dia e R$0,20 por Km rodado. */

var kmsPercorrido = parseFloat(prompt("Digite a quantidade de Km percorridos"))
var diasAlugado = parseFloat(prompt("Digite a quantidade de dias de locação"))

var valorFinal = (kmsPercorrido * 0.20) + (diasAlugado * 90)

alert(`O valor final do aluguel é de R$${valorFinal}`)