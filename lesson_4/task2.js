/* 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу. */
// let basket = [
//     ['item1', 1, 1000],
//     ['item2', 4, 500],
//     ['item3', 2, 5000]
// ]
// function countBasketPrice(basket) {
//     let basketPrice = 0
//     for (let i = 0; i < basket.length; i++) {
//          basketPrice += basket[i][2]
//     }
//     return 'Сумма товаров в корзине: ' + basketPrice + ' рублей'
// }
// console.log(countBasketPrice(basket));
let basket = {
    userId: 1,
    products: [],
    addProduct(obj) {
        let count = parseInt(prompt('Сколько ' + obj.manufacture + ' ' + obj.model + ' добавить в корзину?'))
        if (count > obj.availableCount) {
            return alert('Невозможно добаить в корзину ' + count + ' товаров' + obj.manufacture + ' ' + obj.model + '. Всего доступно ' + obj.availableCount)
        }
        this.products.push([obj, count])
    },
    showBasket() {
        for (i = 0; i < this.products.length; i++) {
            console.log(this.products[i][0].manufacture + ' ' + this.products[i][0].model + ' В количестве: ' + this.products[i][1]);
        }
    },
    showBasketPrice() {
            let basketPrice = 0
            for (let i = 0; i < this.products.length; i++) {
                basketPrice += this.products[i][0].price * this.products[i][1]
            }
            return 'Сумма товаров в корзине: ' + basketPrice + ' рублей'
    }
}
function createProduct() {
    let product = {
        type: prompt('Введите тип продукта'),
        manufacture: prompt('Введите производителя продукта'),
        model: prompt('Введите номер модели'),
        price: parseInt(prompt('Введите цену ')),
        availableCount: parseInt(prompt('Введите общее количество '))
    }
    return product
}
product1 = createProduct()
product2 = createProduct()
product3 = createProduct()
basket.addProduct(product1)
basket.addProduct(product2)
basket.addProduct(product3)
basket.showBasket()
console.log(basket.showBasketPrice());