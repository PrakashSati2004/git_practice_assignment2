let num = 3;
let count = 0;
for(let i = 1; i < 100; i++){
	if(num % i ==0){
	count++;
	};
};
if(count == 2){
console.log("prime no");
}else {
console.log("not a prime no");
}