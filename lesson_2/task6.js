/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
и вернуть полученное значение (использовать switch). */
function mathOperation(a,b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;   
        default:
            console.log("wrong operation");
            break;
    }
}
var a = parseInt(prompt('Введите первое число: '))
var b = parseInt(prompt('Введите второе число: '))
var operation = prompt('Введите знак арифметической операции ("+", "-", "/", "*") ')
console.log(mathOperation(a,b,operation));

