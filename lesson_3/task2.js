/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */
let basket = [
    ['item1', 1, 1000],
    ['item2', 4, 500],
    ['item3', 2, 5000]
]
function countBasketPrice(basket) {
    let items = ''
    let itemsCount = 0
    let basketPrice = 0
    for (let i = 0; i < basket.length; i++) {
         items += basket[i][0] + " "
         itemsCount += basket[i][1]
         basketPrice += basket[i][2]
    }
    return 'В корзине лежат товары: ' + items + ' В количестве: ' + itemsCount + ' штук. На сумму: ' + basketPrice + ' рублей'
}
console.log(countBasketPrice(basket));