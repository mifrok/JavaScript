const basket = {
    userId: 1,
    products: [],
    addProduct(obj) {
        let count = 1//parseInt(prompt('Сколько ' + obj.manufacture + ' ' + obj.model + ' добавить в корзину?'))
        if (count > obj.availableCount) {
            return alert('Невозможно добаить в корзину ' + count + ' товаров' + obj.manufacture + ' ' + obj.model + '. Всего доступно ' + obj.availableCount)
        }
        this.products.push([obj, count])
        obj.availableCount -= count
        catalog.render()
        catalog.clearCatalog()
        catalog.addEventHandlers()
        this.render()
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
    cartBlock: document.createElement('div'),
    render() {
        this.cartBlock.textContent = this.showBasketPrice()
        this.cartBlock.classList.add('cart')
        document.body.appendChild(this.cartBlock)
    }
}
const catalog = {
    products: [],
    createProduct() {
        let product = {
            id: this.getNewId(),
            type: 'motherboard',//prompt('Введите тип продукта'),
            manufacture: 'asus',//prompt('Введите производителя продукта'),
            model: 'z93',//prompt('Введите номер модели'),
            price: 5000,//parseInt(prompt('Введите цену ')),
            availableCount: 10//parseInt(prompt('Введите общее количество '))
        }
        this.products.push(product)
        return product
    },
    getNewId() {
        return this.products.length === 0 ? 1 : this.products.length + 1
    },
    render() {
        let catalogBlock = document.createElement('DIV')
        catalogBlock.classList.add('catalog')
        this.products.forEach(element => {
            let info = `<div class="good">
                <div><b>Тип товара</b>: ${element.type}</div>
                <div><b>Наименование</b>: ${element.model}</div>
                <div><b>Производитель</b>: ${element.manufacture}</div>
                <div><b>Цена за шт.</b>: ${element.price}</div>
                <div><b>Доступно</b>: ${element.availableCount}</div>
                <button class="btn" data-productid=${element.id.toString()}>Добавить в корзину</button>
                <br>
                </div>`
            //info.addEventListener('click', () => basket.addProduct(element))
            catalogBlock.insertAdjacentHTML('beforeend', info)
        }
        );
        document.body.appendChild(catalogBlock)
        //this.addEventHandlers()
    },
   addEventHandlers() {
       document.querySelector('.catalog').addEventListener('click', event => this.addToBasket(event))
   },
   addToBasket(event) {
       if (!event.target.classList.contains('btn')) return
       const productId = +event.target.dataset.productid
       const productToAdd = this.products.find((product) => product.id == productId)
       basket.addProduct(productToAdd)
   },
   clearCatalog() {
       document.querySelector('.catalog').remove()
   }
}

product1 = catalog.createProduct()
product2 = catalog.createProduct()
product3 = catalog.createProduct()

//basket.addProduct(product1)
//basket.addProduct(product2)
//basket.addProduct(product3)
catalog.render()
catalog.addEventHandlers()
basket.render()
// сделал по минимуму задание, пока ограничен по времени. по хорошему надо бы написать с нуля нормально код :)