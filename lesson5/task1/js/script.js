
let ul = document.querySelector(".menu"),
    li = document.querySelectorAll(".menu-item"),
    fifthLi = document.createElement("li"),
    body = document.getElementsByTagName("body"),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    column = document.getElementsByClassName("column"),
    promp = document.querySelector(".prompt");
    
ul.insertBefore(li[2],li[1]);
fifthLi.classList.add("menu-item");
ul.appendChild(fifthLi);
fifthLi.textContent = "Пятый пункт";

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

title.textContent = "Мы продаем только подлинную технику Apple";

column[1].removeChild(adv);

let ans = prompt("Как вы относитесь к технике Apple?", '');

promp.textContent = ans ;


