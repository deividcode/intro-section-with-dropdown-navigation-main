/* ========== VARIABLES ========== */

let screenBlack = document.querySelector('.screen-black');
let menu = document.querySelector('.menu');
let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');

let isOpen = false;

/* ========== EVENTS ========== */

openMenu.addEventListener('click', ()=> {    
    menu.style.right = "0%";    
    screenBlack.style.display = "block";
    screenBlack.style.opacity = "1";
})

closeMenu.addEventListener('click', ()=> {
    menu.style.right = "-70%";
    screenBlack.style.opacity = "0";
    screenBlack.style.display = "none";
})

screenBlack.addEventListener('click', () => {
    menu.style.right = "-70%";
    screenBlack.style.opacity = "0";
    screenBlack.style.display = "none";
});
