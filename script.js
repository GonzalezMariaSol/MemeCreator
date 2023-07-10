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

const ligthHeader = document.getElementById('headerContainer')
const ligthButtonContainer = document.getElementById('buttonContainer')
const ligthMain = document.getElementById('mainContainer')
const ligthDownloadButton = document.getElementById('downloadPicButton')
const ligthAsideImg = document.getElementById('asideImg')
const ligthAsideText = document.getElementById('asideText')

ligthModeButton.addEventListener('click',()=>ligthMode())

const ligthMode = ()=>{
    ligthHeader.classList.toggle('ligthModeHeader')
    ligthButtonContainer.classList.toggle('ligthModeButtonHeader')
    ligthMain.classList.toggle('ligthMain')
    ligthDownloadButton.classList.toggle('ligthDownloadPictureButton')
    ligthAsideImg.classList.toggle('ligthModeAsideImg')
    ligthAsideText.classList.toggle('ligthModeAsideText')
    if (ligthHeader.classList.contains("ligthModeHeader")){
        ligthModeButton.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }else{
        ligthModeButton.innerHTML = '<i class="fa-regular fa-sun" style="color: #ffffff;"></i> Ligth Mode'
    }
}


// ---------------------------------------------TOMAR TEXTOS DEL MEME---------------------------------------------------------------------------

const firstTextBox = document.getElementById('topText')
const secondTextBox = document.getElementById('bottomText')     // YO QUIERO PASAR A...

const inputTopText = document.getElementById('inputTopText')
const inputBottomText = document.getElementById('inputBottomText') // QUIERO ATRAPAR



inputTopText.addEventListener('input', (event)=> changeTopText(event))

const changeTopText = (e)=> {
    valueTopText = e.target.value
    firstTextBox.innerHTML = `${valueTopText}`
}

inputBottomText.addEventListener('input', (event)=> changeBottomText(event))

const changeBottomText = (e)=> {
    valueBottomText = e.target.value
    secondTextBox.innerHTML = `${valueBottomText}`
}


// ---------------------------------------------TOMAR IMG DEL MEME---------------------------------------------------------------------------

const userUrlMeme = document.getElementById('memeUrl') //LO QUE QUIERO TOMAR
console.log(userUrlMeme)

const containerMeme = document.getElementById('memeContainer') //A DONDE LO QUIERO PASAR
console.log(containerMeme)

userUrlMeme.addEventListener('input', (e)=> changesImgMemeContainer(e))
 
const changesImgMemeContainer = (e)=> {
    containerMeme.style.backgroundImage = `url('${e.target.value}')`
    containerMeme.style.backgroundSize = 'cover'
    containerMeme.style.backgroundRepeat = 'no-repeat'
    containerMeme.style.backgroundPosition = 'center'
}

























