//2.	Receba o salário-base de um funcionário. Calcule e imprima o salário a receber, sabendo-se que esse funcionário tem uma gratificação de 5% sobre o salário-base. Além disso, ele paga 7% de imposto sobre o salário-base.

var salarioBase = parseFloat(prompt("Digite o salario base"))

var gratificacao = salarioBase * 0.05
var imposto = salarioBase * 0.07
var salarioFinal = salarioBase + gratificacao -imposto

alert(`O salario a receber é R$ ${salarioFinal.toFixed(2)}`)