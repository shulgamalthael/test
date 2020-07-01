let arr = [2 , 4 , 5 , 7 , 9 , 4 , 1 , 16];
alert(arr);
let value = getEven(arr);
alert(value);

function getEven(arr){

	for (let i = 0; i < arr.length; i++){
  		if (arr[i] % 2 == 0){
  	
  	alert(arr[i]);
  		}
	}
	return value;
}