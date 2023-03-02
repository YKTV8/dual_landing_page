const nav = document.querySelector('.navbar__menu')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 200) {
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}

document.querySelector("div.container1").addEventListener("click", function(event) {
    event.preventDefault();
    let targetId = this.getAttribute("div.container1");
    let targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
    console.log(targetId)
  });
