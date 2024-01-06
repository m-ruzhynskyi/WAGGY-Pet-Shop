let headSplider = new Splide( '#headSplider', {
    type  : 'loop',
    rewind: true,
    speed: 800,
} );

headSplider.mount()

function adaptiveSlider(name, per){
    let splider = new Splide( '.' + name, {
        type  : 'slide',
        perPage: per,
        rewind: true,
        speed: 800,
        pagination: false
    } );

    splider.mount();
}
function spliderProducts (per){
    const sel = ['products__carousel', 'bestSelling__carousel']
    sel.forEach(carName => adaptiveSlider(carName, per))
}

function checkWidth(width){
    if (width <= 1280) spliderProducts(3)
    else spliderProducts(4)
}
window.addEventListener("resize", () => {
    checkWidth(self.innerWidth)
})


let reviewsCarousel = new Splide( '.reviews__carousel', {
    type  : 'loop',
    rewind: true,
    speed: 800,
    pagination: true,
    arrows: false
} );

reviewsCarousel.mount();
window.addEventListener('DOMContentLoaded', () => {
    checkWidth(self.innerWidth)
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

