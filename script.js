// ---------------------------------------------------------BOTONES ASIDE---------------------------------------------------------------------------
const buttonImage = document.getElementById('imageButton')
const buttonText = document.getElementById('textButton')
const asideImage = document.getElementById('asideImg')
const asideText = document.getElementById('asideText')


buttonText.addEventListener('click', ()=>hideAsideText())
const hideAsideText = ()=> {
    asideText.classList.remove('hide')
    asideImage.classList.add('hide')
}


// funciona pero NO TIENE SENTIDO EL ORDEN DE LAS ORDENES DENTRO DE LA FUNCION



buttonImage.addEventListener('click', ()=>hideAsideImg())
const hideAsideImg = ()=> {
    asideText.classList.add('hide')
    asideImage.classList.remove('hide')
}


// -----------------------------------------------------MODO CLARO/OSCURO---------------------------------------------------------------------------


const ligthModeButton = document.getElementById('ligthDarkMode')
console.log(ligthModeButton)


const ligthHeader = document.getElementById('headerContainer')
console.log(ligthHeader)

const ligthButtonContainer = document.getElementById('buttonContainer')
console.log(ligthButtonContainer)

const ligthMain = document.getElementById('mainContainer')
console.log(ligthMain)

const ligthDownloadButton = document.getElementById('downloadPicButton')

const ligthAsideImg = document.getElementById('asideImg')
console.log(ligthAsideImg)

const ligthAsideText = document.getElementById('asideText')
console.log(ligthAsideText)

ligthModeButton.addEventListener('click',()=>ligthMode())

const ligthMode = ()=>{
    ligthHeader.classList.add('ligthModeHeader')
    ligthButtonContainer.classList.add('ligthModeButtonHeader')
    ligthMain.classList.add('ligthMain')
    ligthAsideImg.classList.add('ligthModeAsideImg')
    ligthAsideText.classList.add('ligthModeAsideText')
    ligthDownloadButton.classList.add('ligthDownloadPictureButton')
}
































