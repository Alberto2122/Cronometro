// Essa parte é responsavel por pegar os dados do html.

const span = document.querySelector('span')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnClean = document.querySelector('#btnClean')

// Isso é uma váriavel.
var interval

// Essa parte pertence ao click do botão de Start.
btnStart.onclick = () => {
   btnStart.disabled = true
   btnPause.disabled = false

 //  Isso é uma váriavel.   
   var value = parseFloat(span.innerHTML)

   interval = setInterval(() =>{
    value += 0.1

    span.innerHTML = value.toFixed(1)
   },100);
}

// Essa parte pertence ao click do botão de Pause e Clean.
btnPause.onclick = () => {
    btnStart.disabled = false
    btnPause.disabled = true
 
    clearInterval(interval)
 }
 
 btnClean.onclick = () => {
    btnStart.disabled = false
    btnPause.disabled = true
 
    clearInterval(interval)
    span.innerHTML = "0.0"
 }
 
 