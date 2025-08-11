/* 1 Elabore um programa que apresente o valor da conversão em real (R$) de um valor lido em
dólar (US$). O programa deve solicitar o valor da cotação do dólar*/

var dolar = parseFloat(prompt("Digite um valor em dolar"))
var real = dolar / 5.76

alert(`A cotação do dolar é 5,76. Este valor convertido em reais é R$${real.toFixed(2)}`)

