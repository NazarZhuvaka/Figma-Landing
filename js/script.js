// const title = document.querySelector('.welcome__info-title')

// const titleLoad = () => {
//     title.textContent = ''
//     setTimeout(() => {
//         title.textContent = "Work at the speed of thought"
//     } , 1000)
// }

// titleLoad()


const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click' , function () {
    document.querySelector('.header__nav').classList.toggle('active')
})
