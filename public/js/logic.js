// console.log("Script is Working") //Debug

// logic for slidebar

const menu_open = document.querySelector('#menu-toggle');
const menu_close = document.querySelector('#menu-toggle-close');
const slidebar = document.querySelector('#sidebar');

menu_open.addEventListener("click",()=>{
    slidebar.classList.toggle("translate-x-[102%]")
});
menu_close.addEventListener("click",()=>{
    slidebar.classList.toggle("translate-x-[102%]")
});