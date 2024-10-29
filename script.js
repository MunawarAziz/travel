// this is yotube link    (https://youtu.be/9EFsd1PivhM)

const menu = document.querySelector(".menu")
const button = document.querySelector("#toggle")

button.addEventListener("click", function(){
    menu.classList.toggle("show_menu")
})