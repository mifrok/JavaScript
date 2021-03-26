/* Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */
function myPlus(a, b) {
    return a + b
}
function myMinus(a, b) {
    return a - b
}
function myMultiply(a, b) {
    return a * b
}
function myDivision(a, b) {
    return a / b
}
var a = 100
var b = 50
console.log(myPlus(a,b), myMinus(a,b), myDivision(a,b), myMultiply(a,b));