const navBtn = document.querySelector(".navbar__nav-trigger")
const navBtnImg = document.querySelector(".navbar__trigger-img")




const nav = document.querySelector(".navbar__navlist")

navBtn.addEventListener('click', ()=> {
    nav.classList.toggle("active")
    if(nav.classList.contains("active")) {
        navBtnImg.src = 'images/icon-close.svg'
    } else {
        navBtnImg.src = 'images/icon-hamburger.svg'
    }
})