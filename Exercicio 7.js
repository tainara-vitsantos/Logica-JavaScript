/*7)	Um banco concede um valor para empréstimo de até 60% do saldo médio anual do cliente. Faça um algoritmo que leia o saldo médio do cliente, calcule e mostre o valor disponível para empréstimo.*/

var n1 = parseInt( prompt("Saldo anual do cliente"))

var sal =  n1 / 12
var med = sal * 0.60

alert(`O valor disponivel para emprestimo é: ${med}`)