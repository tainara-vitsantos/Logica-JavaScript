// 1.	Uma empresa contrata um encanador por R$ 30,00 por dia. Faça um programa que solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são descontados 8% para o imposto de renda.

var diasTrabalhados = parseInt(prompt("Digite os dias trabalhados"))

var salario = diasTrabalhados * 30
var salarioSemImposto = salario * 0.08
var salarioFinal = salario - salarioSemImposto

alert(`salario sem o imposto é R$ ${salarioFinal.toFixed(2)}`)