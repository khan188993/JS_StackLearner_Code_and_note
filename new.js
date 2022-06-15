//finding Largest Number of array
function largestNumber(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        // result = (result>arr[i])?result:arr[i];
        result = result < arr[i] ? result : arr[i]; //for lowest number
    }
    console.log(result);
}

console.log(largestNumber([0, -2, 3, 4, 55, 23, 3]));

//Fibbonacchi Calculating 

/* 
0,1,1,2,3,5,8; 
-)0,1 must thakbe, array te,
-)5 bar er fibbo lagle 2ta ager thkbe and 3bar loop krbo 
-)fib[2] index e , fib[i-1]+fib[i-2] krbo 
-)return krbo array 

*/

function fibbonacchi(num) {
    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibbonacchi(10))