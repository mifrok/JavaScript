"use strict"
var tf
var tc
tc = parseInt(prompt("Введите температуту в градусах по Цельсию: "))
tf = (9 / 5) * tc + 32
alert(tf)
var name
name = "Василий"
var admin
admin = name
alert(admin)
alert(1000 * "108") //108000
// async - выполняет первые загруженные скрипты
// defer - выполняет скрипты в порядке, установленном в документе. если скрипт еще не загружен, и находится выше, чем уже загруженный, загруженный скрипт подождет.
