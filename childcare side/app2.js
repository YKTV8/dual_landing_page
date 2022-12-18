//Staff Page JavaScript
const panels = document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach((panels)=>{
    panels.addEventListener('click', () =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panels=>{
        panels.classList.remove('active')
    })
}

//Overlays functions for active class
const overlays = document.querySelectorAll('.panel');
 console.log(overlays);
overlays.forEach((overlays) =>{
    overlays.addEventListener('click', ()=>{
        removeActiveOverlay()
        overlays.classList.add('active')
    })
    if(overlays === 'active'){
        addActiveOverlay()
    }else{
        removeActiveOverlay()
    }
})
function removeActiveOverlay(){
    overlays.forEach(overlays =>{
        overlays.classList.remove('active')
    })
}
function addActiveOverlay(){
    overlays.forEach(overlays =>{
        overlays.classList.add('active')
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


//code provided by ChatGPT
// JavaScript
// function overlay() {
//     // Code for the overlay function goes here
//   }
  
//   const panel1 = document.getElementById('panel1');
//   const panel2 = document.getElementById('panel2');
//   const panel3 = document.getElementById('panel3');
  
//   panel1.addEventListener('click', function() {
//     overlay();
//     panel1.classList.add('selected');
//     panel2.classList.remove('selected');
//     panel3.classList.remove('selected');
//   });
  
//   panel2.addEventListener('click', function() {
//     overlay();
//     panel1.classList.remove('selected');
//     panel2.classList.add('selected');
//     panel3.classList.remove('selected');
//   });
  
//   panel3.addEventListener('click', function() {
//     overlay();
//     panel1.classList.remove('selected');
//     panel2.classList.remove('selected');
//     panel3.classList.add('selected');
//   });
//   This code will call the overlay function when any of the panels is clicked, and it will add the selected class to the clicked panel and remove it from the other panels. You can use similar code to call the overlay function on hover by using the mouseover event instead of the click event.
  
  
  
  
  