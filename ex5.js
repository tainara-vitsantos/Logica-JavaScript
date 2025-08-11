// 5.	Três amigos jogaram na loteria. Caso eles ganhem, o prêmio deve ser repartido proporcionalmente ao valor que cada um investiu na aposta. Faça um programa que leia quanto cada apostador investiu, o valor do prêmio, e imprima quanto cada um ganharia do prêmio com base no valor investido.

var premio = parseFloat(prompt("Digite o valor do premio"))
var amigoUm = parseFloat(prompt("Digite o valor que o amigo Um investiu"))
var amigoDois = parseFloat(prompt("Digite o valor que o amigo dois investiu"))
var amigoTres = parseFloat(prompt("Digite o valor que o amigo tres investiu"))

var valorInvestido = amigoUm + amigoDois + amigoTres

var umRecebera = (amigoUm/valorInvestido) * premio
var doisRecebera = (amigoDois/valorInvestido) * premio
var tresRecebera = (amigoTres/valorInvestido) * premio

alert(`Amigo Um recebera R$ ${umRecebera.toFixed(2)}\nAmigo Dois recebera R$ ${doisRecebera.toFixed(2)}\nAmigo Tres recebera R$ ${tresRecebera.toFixed(2)}`)