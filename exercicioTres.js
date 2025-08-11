/* 3 O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem
do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que leia o custo
de fábrica de um carro e escreva o custo ao consumidor. */

var custoDeFabrica = parseFloat(prompt("Custo de fábrica R$ "))

var distribuidor = custoDeFabrica * 0.28
var impostos = custoDeFabrica *0.45
var valorFinal = custoDeFabrica + distribuidor + impostos

alert(`o custo de fábrica é: R${custoDeFabrica}\nO E o custo ao consumidor é: : R$${valorFinal}`)
