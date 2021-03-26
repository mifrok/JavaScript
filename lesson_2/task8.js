/* С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень. */
function power(val, pow) {
    if (pow == 1) {
        return val
    }
    else {
        var result = power(val, pow - 1)
    }
    return val * result
}

var a = 2
var pow = 20
console.log(power(a, pow));