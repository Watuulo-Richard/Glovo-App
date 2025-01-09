const spinnerLoader = document.querySelector('.loading')
const container = document.querySelector('.container')

document.addEventListener('DOMContentLoaded', ()=>{
    spinnerLoader.classList.remove('hide')
    container.classList.add('hide')
})

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        spinnerLoader.classList.add('hide')
        container.classList.remove('hide')
    }, 3000)
})