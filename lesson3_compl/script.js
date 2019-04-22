let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.substr(1);
str = str.replace(/-/g, " ");
console.log(str);
str = str.replace(/им/g, "о");
alert(str);


let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'string') {
        arr.splice(i, 1);
        i--;
        continue;
    } else {
        sum = sum + Math.pow(arr[i], 3); 
    }
}
console.log(Math.sqrt(sum).toFixed(2));

// let text = prompt("Введите текст - ", "");
// function redStr(text) {
    
//     let a = 0,
//         b = 0;
      
//     if (typeof(text) === 'string') {
//         a = text.indexOf(" ", 1);
//         b = text.lastIndexOf(" ", 1);
        
//     } else {
//         alert('Это не текст!');
//     }
//     text.slice(a, 1);
//     text.slice(b, 1);
    
//     console.log(text);
// }


let text = prompt("Введите текст - ", "");
function redStr(text) {
         
    if (typeof(text) === 'string') {
    text = text.trim();
    } else {
        alert('Это не текст!');
    }
    if (text.length > 50) {
        alert('Многовато символов. Потише.');
    }
    console.log(text.substring(0, 50) + '...');
}


redStr(text);