var m = [1, 2, 2, 4, 10, 6, 8, 8, 9, 8];
var count = m.length;
//создаем вспомогательный массив mysort
//и в нем считаем сколько каждое число встречается в исходном массиве
//то есть в итоге получим mysort[1]=1, mysort[2]=2, mysort[4]=1, mysort[6]=1 и тд
var mysort = {};
for (var i = 0; i < count; i++) {
  var k=m[i];
  if (mysort[k] === undefined) {
mysort[k]=1;
  } else {
mysort[k]++;
  }
}

var n = [];
//cчитаем сколько значимых элементов в этом массиве
var count = 0;
for (var item in mysort) {count++;}

//перебираем массив столько раз сколько в нём элементов
for (var i2=0; i2<count; i2++) {
  var maxcount = 0;
  var digit = 0;
  //в цикле находим элемент с максимальным значением
  for (var item in mysort) {
if (Number(mysort[item]) > maxcount) {
  //в maxcount пишем текущее максимальное значение
  //в digit индекс элемента с этим значением
  digit = Number(item);
  maxcount = Number(mysort[item]);
} else {
  //если значения одинаковы то в приоритете элемент с меньшим индексом
  if (mysort[item] == maxcount) {
    if (Number(item) < Number(digit)) {
      digit = Number(item);
    }
  }
}
  }
  //после того как нашли нужный элемент
  //удаляем его из массива mysort
  //и записываем в массив n число digit столько раз сколько значение maxcount
  delete mysort[digit];
  for (var i = 0; i < maxcount; i++) {
n.push(digit);
  }
}
//в результате в n отсортированный массив
document.write(n);