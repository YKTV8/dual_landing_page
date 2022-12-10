const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom =(window.innerHeight / 5 * 4)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
const nav = document.querySelector('.navbar__menu')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 10) {
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}