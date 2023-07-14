// ---------------------------------------------------------BOTONES ASIDE---------------------------------------------------------------------------
const buttonImage = document.getElementById('imageButton')
const buttonText = document.getElementById('textButton')
const asideImage = document.getElementById('asideImg')
const asideText = document.getElementById('asideText')


buttonImage.addEventListener('click', ()=>hideAsideImg())
const hideAsideImg = ()=> {
    asideText.classList.add('hide')
    asideImage.classList.remove('hide')
}


buttonText.addEventListener('click', ()=>hideAsideText())

const hideAsideText = ()=> {
    asideText.classList.remove('hide')
    asideImage.classList.add('hide')
}


// funciona pero NO TIENE SENTIDO EL ORDEN DE LAS ORDENES DENTRO DE LA FUNCION
//NO SE PORQUE SE MUESTRA PRIMERO EL ASIDE TEXTO SI EL ASIDE IMG ES EL QUE ESTA DECLARADO EN TODAS PARTES PRIMERO





// -----------------------------------------------------MODO CLARO/OSCURO---------------------------------------------------------------------------


const ligthModeButton = document.getElementById('ligthDarkMode')

const ligthHeader = document.getElementById('headerContainer')
const ligthButtonContainer = document.getElementById('buttonContainer')
const ligthMain = document.getElementById('mainContainer')
const ligthDownloadButton = document.getElementById('downloadPicButton')
const ligthAsideImg = document.getElementById('asideImg')
const ligthAsideText = document.getElementById('asideText')
const ligthDivBackgroundMeme = document.getElementById('divBackgroundMeme')

ligthModeButton.addEventListener('click',()=>ligthMode())

const ligthMode = ()=>{
    ligthHeader.classList.toggle('ligthModeHeader')
    ligthButtonContainer.classList.toggle('ligthModeButtonHeader')
    ligthMain.classList.toggle('ligthMain')
    ligthDownloadButton.classList.toggle('ligthDownloadPictureButton')
    ligthAsideImg.classList.toggle('ligthModeAsideImg')
    ligthAsideText.classList.toggle('ligthModeAsideText')
    ligthDivBackgroundMeme.classList.toggle('ligthBackgroundMeme')
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
const containerMeme = document.getElementById('memeBox') //A DONDE LO QUIERO PASAR

userUrlMeme.addEventListener('input', (e)=> changesImgMemeContainer(e))
 
const changesImgMemeContainer = (e)=> {
    containerMeme.style.backgroundImage = `url('${e.target.value}')`
    containerMeme.style.backgroundSize = 'cover'
    containerMeme.style.backgroundRepeat = 'no-repeat'
    containerMeme.style.backgroundPosition = 'center'
}

// ---------------------------------------------DESCARGAR MEME---------------------------------------------------------------------------

const downloadButton = document.getElementById("downloadPicButton") //LO QUE QUIERO TOMAR
const meme = document.getElementById("memeContainer")     //LO QUE QUIERO CAMBIAR

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function(blob){
      window.saveAs(blob, "meme.png");
    });
  };

//   SE DESCARGA PERO MAL, PORQUE?


// -------------------------------------------------CAMBIAR FONDO DE COLOR MEME-----------------------------------------------------------------------------------------------------------
const inputBackgroundMeme = document.getElementById('backgroundColorMeme') //LO QUE QUIERO TOMAR
const showColorPicked = document.getElementById('backgroundColorNumber') //LO QUE QUIERO CAMBIAR

inputBackgroundMeme.addEventListener('input', (event)=> backgroundColorChangeMeme(event))

const backgroundColorChangeMeme = (e)=> {
    let color = e.target.value
    containerMeme.style.backgroundColor = color
    showColorPicked.innerHTML = `${color}`
}
// PORQUE SE ME PONE EN AZUL EL SPAN?


// -------------------------------------------------FILTRO AL FONDO DE COLOR MEME-----------------------------------------------------------------------------------------------------------

const selectionEffect = document.getElementById('selectColorBackgroundEfect')


selectionEffect.addEventListener('change', ()=> applyEffect())

const applyEffect = ()=> {
    console.log(selectionEffect.value)
    containerMeme.style.backgroundBlendMode = `${selectionEffect.value}`
}

// -----------------------------------------------------------FILTROS---------------------------------------------------------------------------

const brightFilter = document.getElementById('brigthInput')
const opacityFilter = document.getElementById('opacityInput')
const contrastFilter = document.getElementById('contrastInput')
const blurFilter = document.getElementById('blurInput')
const sepiaFilter = document.getElementById('sepiaInput')
const hueFilter = document.getElementById('hueInput')
const saturationFilter = document.getElementById('saturationInput')
const grayScaleFilter = document.getElementById('grayScaleInput')

brightFilter.addEventListener('input', ()=> filters())
opacityFilter.addEventListener('input', ()=> filters())
contrastFilter.addEventListener('input', ()=> filters())
blurFilter.addEventListener('input', ()=> filters())
sepiaFilter.addEventListener('input', ()=> filters())
hueFilter.addEventListener('input', ()=> filters())
saturationFilter.addEventListener('input', ()=> filters())
grayScaleFilter.addEventListener('input', ()=> filters())

const filters = () => {
    containerMeme.style.filter = `brightness(${brightFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturationFilter.value}%) grayscale(${grayScaleFilter.value})`
}


// -----------------------------------------------ESCONDER TEXTO TOP Y TEXTO BOTTOM---------------------------------------------------------------------------

//--------------TOP TEXT----
const inputCheckText = document.getElementById('checkWithoutTopText')

inputCheckText.addEventListener('change', () => hideTopText())

const hideTopText = () => {
  if (inputCheckText.checked) {
    firstTextBox.classList.add('hide')
  } else {
    firstTextBox.classList.remove('hide')
  }
}

//--------------BOTTOM TEXT----
const inputCheckBottomText = document.getElementById('checkWithoutBottomText')

inputCheckBottomText.addEventListener('change', () => hideBottomText())

const hideBottomText = () => {
  if (inputCheckBottomText.checked) {
    secondTextBox.classList.add('hide')
  } else {
    secondTextBox.classList.remove('hide')
  }
}

//PORQUE NO FUNCIONA CON EL TOGGLE? OSEA FUNCIONA PERO NO COMO DEBERIA


















































