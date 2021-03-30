/* С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */
let i = 0
while (i <= 100) {
    let isSimple = true
    for (let k = 2; k<i; k++) {
        if (i % k == 0) {
            isSimple = false
            break
        }
    }
    if (isSimple) {
        console.log(i);
    }
    i++;
}