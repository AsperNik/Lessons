let array = [2,3,2,4,5,12,2,3,3,3,12],
    quantArr = {},
    kolvoEl = 0,
    sortArray = [];
for (let i = 0; i < array.length; i++) {
  let a=array[i];
  if (quantArr[a] === undefined) {
quantArr[a]=1;
kolvoEl++;
  } else {
quantArr[a]++;
  }
}

for (let i = 0; i < kolvoEl; i++) {
  maxValue = 0;
  quantityElArray = 0;
  for (let item in quantArr) {
    if (+quantArr[item] > maxValue) {
      maxValue = +quantArr[item];
      quantityElArray = +item;
    } else {
      if (+quantArr[item] == maxValue){
        quantityElArray = +item;
      }
          
        }
       
    
  }

  delete quantArr[quantityElArray];
  for (let i = 0; i < maxValue; i++) {
    sortArray.push(quantityElArray);
  }
}

console.log(sortArray);

