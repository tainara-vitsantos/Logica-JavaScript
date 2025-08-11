/*6)	Um vendedor recebe, por mês, um salário fixo e mais um adicional de 20% do valor das vendas que ele efetuou. Faça um algoritmo que leia o salário fixo e o valor de venda do mês, calcule e mostre o salário final do vendedor. */

var n1 = parseFloat(prompt(`Salário fixo: `))
var n2 = parseFloat( prompt("O valor de vendas desse mês foi de"))

var sal = n2 * 0.20
var fim = sal + n1

alert(`O salário fixo desse vendedor é: ${n1}\n O valor de vendas desse mês foi de: ${n2}\n E o salário final é: ${fim}`)