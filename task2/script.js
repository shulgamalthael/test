let arr = [2, 4, 5, 7, 9, 4, 1, 16];
let min = getMin(arr);
alert(arr);
alert(min);
 
// получение минимального элемента массива
function getMin(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}