let rightMenu = document.querySelector('.rightMenu')
let lowBrightness = document.querySelector('.lowBrightness')
let body = document.querySelector('body')

document.querySelector('.bottomMenu__icon').addEventListener('click', () => {
    [rightMenu, lowBrightness].forEach(el => el.style.display = 'block')
    body.style.overflow = 'hidden'
})

lowBrightness.addEventListener('click', () => {
    [rightMenu, lowBrightness].forEach(el => el.style.display = 'none')
    body.style.overflow = ''
})