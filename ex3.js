//3.	Leia um valor inteiro em segundos e imprima-o em horas, minutos e segundos.

var segundos = parseInt(prompt("digite um valor em segundos"))

var horas = segundos / 3600
var segundosRestantes = segundos % 3600
var minutos = segundosRestantes / 60
var segundosFinais = segundosRestantes % 60

alert(`${horas.toFixed(0)} Hora(s)\n${minutos.toFixed(0)} Minuto(s)\n${segundosFinais} Segundo(s)`)


