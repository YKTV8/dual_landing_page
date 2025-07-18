const bg = document.querySelector('.welcomeTo')

let x = 0;
let speed = 4.5;



function animate() {
x += speed;
bg.style.backgroundPosition = `${x}px 0`;
requestAnimationFrame(animate);
}

animate();