// Essa parte é responsavel por pegar os dados do html.

const span = document.querySelector('span')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnClean = document.querySelector('#btnClean')

// Isso é uma váriavel.
var interval

btnStart.onclick = () => {
   btnStart.disabled = true
   btnPause.disabled = false

   var value = parseFloat(span.innerHTML)

   interval = setInterval(() =>{
    value += 0.1

    span.innerHTML = value.toFixed(1)
   },100);
}

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
 
 