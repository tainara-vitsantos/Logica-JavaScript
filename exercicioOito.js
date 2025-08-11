/* 8 Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno.
Considere que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.
OBS: Pesquise a fórmula da MÉDIA PONDERADA. */

var notaUm = parseFloat(prompt("Digite a primeira nota"))
var notaDois = parseFloat(prompt("Digite a segunda nota"))
var notaTres = parseFloat(prompt("Digite a terceira nota"))

var soma = (notaUm * 2)+(notaDois*3)+(notaTres*5)
var mediaPonderada = 2+3+5

var media = soma / mediaPonderada

alert(`A média é: ${media}`)