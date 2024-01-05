let headSplider = new Splide( '#headSplider', {
    type  : 'loop',
    rewind: true,
    speed: 800,
} );

headSplider.mount()

let productCarousel = new Splide( '.products__carousel', {
    type  : 'slide',
    perPage: 4,
    rewind: true,
    speed: 800,
    pagination: false
} );

productCarousel.mount();

let bestSelling = new Splide( '.bestSelling__carousel', {
    type  : 'slide',
    perPage: 4,
    rewind: true,
    speed: 800,
    pagination: false
});

bestSelling.mount();

let reviewsCarousel = new Splide( '.reviews__carousel', {
    type  : 'loop',
    rewind: true,
    speed: 800,
    pagination: true,
    arrows: false
} );

reviewsCarousel.mount();
window.addEventListener('DOMContentLoaded', () => {
    new PetFood().init()
})
document.querySelectorAll('.categories__title').forEach(category => {
    category.addEventListener('click', (e) =>{
        document.querySelectorAll('.categories__title').forEach(category => {
            category.style.borderBottom = '2px solid #D9D9D8'
        })
        e.target.style.borderBottom = '2px solid #DEAD6F'
        new ShowCategory(e.target.textContent.toLowerCase())
    })
})
