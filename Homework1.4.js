let num = prompt();
if(num % 10 != 0){
	alert((num % 10 + num - num % 10 + ' ') / 10)
} else{
	alert(num)
}