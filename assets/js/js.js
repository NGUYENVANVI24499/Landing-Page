let navigation = document.querySelector("nav")

let menutoggle = document.querySelector(".header__toggle");

let menu = document.querySelector(".header__menu")
menutoggle.onclick = function(){
    navigation.classList.toggle("active");
    menu.classList.toggle("active");
}