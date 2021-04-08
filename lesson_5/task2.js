let basket = {
    userId: 1,
    products: [],
    addProduct(obj) {
        let count = 1//parseInt(prompt('Сколько ' + obj.manufacture + ' ' + obj.model + ' добавить в корзину?'))
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
            let basketQuantity = 0
            if (this.products.length) {
                for (let i = 0; i < this.products.length; i++) {
                    basketPrice += this.products[i][0].price * this.products[i][1]
                    basketQuantity += this.products[i][1]
                }
                return 'Товаров в корзине: ' + basketQuantity + ' штук(и) на сумму ' + basketPrice + ' рублей'
            }
            else {
                return 'Корзина пуста'
            }

    },
    cartBlock: document.querySelector('.cart'),
    render() {
        this.cartBlock.insertAdjacentHTML('afterbegin', this.showBasketPrice())
    }

}
function createProduct() {
    let product = {
        type: 'motherboard',//prompt('Введите тип продукта'),
        manufacture: 'asus',//prompt('Введите производителя продукта'),
        model: 'z93',//prompt('Введите номер модели'),
        price: 5000,//parseInt(prompt('Введите цену ')),
        availableCount: 10//parseInt(prompt('Введите общее количество '))
    }
    return product
}
product1 = createProduct()
product2 = createProduct()
product3 = createProduct()
basket.addProduct(product1)
//basket.addProduct(product2)
//basket.addProduct(product3)
basket.render()
console.log(basket.cartBlock);