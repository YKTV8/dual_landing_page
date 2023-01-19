const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.container')

let load = 0
let int = setInterval(blurring,  1);

function blurring(){
    load++
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

left.addEventListener('mouseenter',() => container.classList.add('hover-left'))
left.addEventListener('mouseleave',()=> container.classList.remove('hover-left'))

right.addEventListener('mouseenter',() => container.classList.add('hover-right'))
right.addEventListener('mouseleave',()=> container.classList.remove('hover-right'))