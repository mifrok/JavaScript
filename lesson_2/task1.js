/* task 1 */

var a = 1, b = 1, c, d;
c = ++a/*a = 2*/; alert(c);           // 2
d = b++/*b = 1*/; alert(d);           // 1
c = (2+ ++a)/*a = 3*/; alert(c);      // 5
d = (2+ b++)/*b = 2*/; alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

// В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование. 
// В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.

