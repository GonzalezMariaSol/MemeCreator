// ---------------------------------------------------------BOTONES ASIDE---------------------------------------------------------------------------
const buttonImage = document.getElementById('imageButton')
const buttonText = document.getElementById('textButton')
const asideImage = document.getElementById('asideImg')
const asideText = document.getElementById('asideText')


buttonText.addEventListener('click', ()=>hideAsideText())
const hideAsideText = ()=> {
    asideText.classList.add('asideText')
    asideImage.classList.add('hideContainer')
}


buttonImage.addEventListener('click', ()=>hideAsideImg())
const hideAsideImg = ()=> {
    asideText.classList.add('hideContainer')
    asideImage.classList.add('asideImage')
}


// -----------------------------------------------------MODO CLARO/OSCURO---------------------------------------------------------------------------



































