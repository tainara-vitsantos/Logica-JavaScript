/* 2 Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e
mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa
em dias e a idade da pessoa em semanas. */

var anoNascimento = parseInt(prompt("Digite o ano do seu Nascimento "))
var anoAtual = parseInt(prompt("Digite o ano atual "))

var idadeAnos = anoAtual -  anoNascimento
var idadeMeses = idadeAnos * 12
var idadeDias = idadeAnos * 365
var idadeSemanas = idadeDias / 7

alert (`A idade em anos é: ${idadeAnos}\nA idade em meses é: ${idadeMeses}\nA idadze em dias é: ${idadeDias}\nA idade em semanas é: ${idadeSemanas.toFixed(2)}`)