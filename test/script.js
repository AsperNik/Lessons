let i = 0;
let numbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
noNumbers = ['здесь', 'нет',  'чисел'];

function filtr(array) {
    if (isNaN(array[i])){
        return false;
    } else {
        return true;
    }
}

function isSomeTrue(array, filtr){
    if (i == array.length) {
        return false;
    }
    if ((filtr(array)) == true) {
        return true;
    } else {
        i++;
        return isSomeTrue(array, filtr);
    }
}

console.log(isSomeTrue(noNumbers, filtr));
