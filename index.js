let show = true
const menuContent = document.querySelector('.header')
const menuToogle = menuContent.querySelector('.menu-toogle')


menuToogle.addEventListener('click', ()=>{
        menuContent.classList.toggle('on')
        show = !true
})