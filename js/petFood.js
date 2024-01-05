class PetFood{
    static categories = Object.keys(petFoodies)
    init(){
        Object.keys(petFoodies).forEach(key => {
            Object.keys(petFoodies[key]).forEach(id => {
                let product = petFoodies[key][id]
                let mainDiv = document.createElement('div')
                let imagineDiv = this.createImagineDiv(product.imgBlock)
                let infoDiv = this.createInfoDiv([product.h3, product.p, product.rating])
                let prodEvents = this.createButtons()

                mainDiv.classList.add('products__product')
                mainDiv.classList.add('food')
                mainDiv.classList.add(key)
                mainDiv.classList.add('animate__animated')
                mainDiv.classList.add('animate__slower')
                mainDiv.append(imagineDiv, infoDiv, prodEvents)

                document.querySelector('.pet-foodies').append(mainDiv)
            })
        })
    }
    createImagineDiv (element){
        let imagineDiv = document.createElement('div')
        let img = new Image()

        imagineDiv.classList.add('product__imageDiv')
        img.classList.add("product_image")

        img.src = element.img

        if(element.promo){
            let p = document.createElement('p');

            p.classList.add('product__promo')

            p.textContent = element.promo

            imagineDiv.append(p)
        }
        imagineDiv.append(img)
        return imagineDiv
    }
    createInfoDiv (element){
        let productInfoBlock = document.createElement("div")
        let h3 = document.createElement('h3')
        let rating = this.createRatingDiv(element[2])
        let p = document.createElement('p')

        productInfoBlock.classList.add('product__info')
        h3.classList.add('product__name')
        p.classList.add('product__price')

        h3.textContent = element[0]
        if(Number.isInteger(element[1])){
            p.textContent = `$${element[1]}.00`
        } else p.textContent = `$${element[1]}`

        productInfoBlock.append(h3, rating, p)

        return productInfoBlock
    }
    createRatingDiv (element){
        let ratingDiv = document.createElement('div')
        ratingDiv.classList.add('product__rating')
        for(let i = 0; i <element; i++){
            let img = new Image()
            img.classList.add('product__star')
            img.src = './assets/img/star.svg'
            img.alt = `${element} stars from 5`
            ratingDiv.append(img)
        }
        return ratingDiv
    }

    createButtons() {
        let div = document.createElement('div')
        let butt1 = document.createElement('button')
        let butt2 = document.createElement('button')
        let img = new Image()

        div.classList.add('product__events')
        butt1.classList.add('butt')
        butt1.classList.add('product__cart')
        butt2.classList.add('likedProduct')

        butt1.textContent = 'Add to cart'
        img.src = "./assets/img/heart.png"
        img.alt = 'like'

        butt2.append(img)

        div.append(butt1, butt2)

        return div
    }
}
class ShowCategory{
    constructor(target) {
        PetFood.categories.filter(productCategory => {
            document.querySelectorAll('.'+ productCategory).forEach(product => {
                product.style.display = 'block'
                product.classList.add('animate__fadeIn')
            })
            if(productCategory !== target){
                document.querySelectorAll('.'+ productCategory).forEach(product => {
                    product.style.display = 'none'
                })
            }
        })
        if(target === 'all'){
            PetFood.categories.filter(productCategory => {
                document.querySelectorAll('.'+ productCategory).forEach(product => {
                    product.style.display = 'block'
                    product.classList.add('animate__fadeIn')
                })
            })
        }
    }
}