/* 5 Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de
um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora
trabalhada. */

var diasTrabalhados = parseInt(prompt("Digite o número de dias trabalhaados no mês"))

var valorDiario = 25 * 8
var salario = diasTrabalhados * valorDiario

alert(`O saláriio é ${salario}`)