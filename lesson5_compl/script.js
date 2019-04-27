let date = new Date(),
    yy = date.getFullYear(),
    mm = date.getMonth(),
    dd = date.getDate(),
    hours = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    weekDay = document.createElement('h1'),
    inputFirstDate = document.createElement('input'),
    inputSecondDate = document.createElement('input'),
    inputDiffDate = document.createElement('input'),
    btn = document.createElement('input'),
    inputs = document.getElementsByTagName('input'),
    p = document.createElement('p'),
    body = document.getElementsByTagName("body"),
    div = document.createElement('div'),
    divInp = document.querySelector('.Inputs'),
    buttonClick = document.querySelector('button');

function fixDate() {
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
}
fixDate();
let now = (hours + ':' + min + ":" + sec + '  ' + dd + '.' + mm + '.' + yy);
alert(now);

function weekDayF() {
    return week[date.getDay()];
}
document.body.appendChild(weekDay);
weekDay.innerHTML = "Сегодня  " + weekDayF();

//Добавление элементов
document.body.appendChild(p);
document.body.appendChild(div);
div.className = "Inputs";
div.appendChild(inputFirstDate);
div.appendChild(inputSecondDate);
div.appendChild(inputDiffDate);
document.body.appendChild(btn);
btn.className = 'button';
btn.type = 'button';
btn.value = 'Рассчитать';

// Стилизация элементов

for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "block";
    inputs[i].style.marginBottom = "50px";
}
p.style.margin = "30px";
p.textContent = "Введите дату в формате DD-MM-YYYY";


//Рассчет разницы
function parseDate(str) {
    let dmy = str.split('-');
    return new Date(dmy[2], dmy[1], dmy[0]-1);
}
function dateDiff(a,b) {
    return Math.round((b-a)/(1000*60*60*24));
}
function calc() {
    let a = document.getElementsByTagName("input")[0].value,
        b = document.getElementsByTagName("input")[1].value;
        inputs[2].value = (dateDiff(parseDate(a), parseDate(b)));

}
btn.onclick = calc;


  

