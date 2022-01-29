/* function getRequest(url,callback) {
    const xhr = new XMLHttpRequest();

xhr.open('get',url);
xhr.onreadystatechange = function (e) {
    if(xhr.readyState ===4){
        if(xhr.status===200){
            let response = JSON.parse(xhr.response);
            callback(null,response);
        }else{
            callback(xhr.status,null);
        }
    }
}

xhr.send();
}

getRequest('https://jsonplaceholder.typicode.com/users',(err,res)=>console.log(res));
getRequest('https://jsonplaceholder.typicode.com/users',(err,res)=>{
    res.forEach((usersValue,index,array) => {
        console.log(usersValue.Name);
        console.log(index);
        console.log(array);
    })
}); */

/* function getIphone(isPassed) {
    let promise = new Promise((resolver,reject)=>{
       setTimeout(() => {
        if(isPassed){
            resolver('You Have Got an Iphone')
        }else{
            reject(new Error('You Have Fail to get an Iphone'))
        }
       }, 3000);
    })

    return promise;
}

getIphone(false)
.then((resolver)=>{
    console.log(resolver)
})
.catch((reject)=>{
    console.log(reject)
})
 */

/* fetch(`https://jsonplaceholder.typicode.com/users/1`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res)
}) */

/* fetch('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    for(let value in data){
        console.log(data.id)
    }
})
 */

/* const price = ()=> {
    return 'price is 10';
}

console.log(price()) */

/* function animals(chickens, cows, pigs) {
	let chickensLeg = 2;
    let cowsLegs = 4;
    let pigLegs = 4;

    return (chickens*chickensLeg+cows*cowsLegs+pigs*pigLegs);
} */
/* 
function isSameNum(num1, num2) {
	let result = num1===num2?true:false;
    return result;
} */

/* function footballPoints(wins, draws, losses) {
	let winPoints = 3;
    let drawPoints = 1;
    let loosePoints = 0;

    return (wins*winPoints+draws*drawPoints+losses*loosePoints)
} */

/* function convert(hours, minutes) {
	return (hours*60*60+minutes*60);
} */

// function checkEquality(a, b) {
//     return a===b;
// }
/* function profitableGamble(prob, prize, pay) {
	let result = ((prob*prize)>pay)?true:false;

    return result;
} */

/* function calculator(str) {
    return new Function('return ' + str)()
}

console.log(calculator("2+2+3")) */

/* function makesTen(a, b) {
	let result = (a ==10 || b==10|| (a+b)==10)?true:false;
    return result;
} */

/* function calculateFuel(n) {
	if(n<10){
        return 100;
    }

    return n*10;
}

console.log(calculateFuel(15)) */

/* function isEmpty(s) {
	let result = s==""?true:false;
	return result;
}

console.log(isEmpty(" ")) */

/* function divisibleByFive(n) {
	let result =(n%5==0)?true:false;
    return result;
} */

/* function divisible(num) {
	let result =(num%100==0)?true:false;
    return result;
} */

/* function dividesEvenly(a, b) {
	let result =(a%b==0)?true:false;
    return result;
} */

/* function stringInt(str) {
	return parseInt(str);
} */

/* function leapYear(year) {
	let result = (year*100%400==0)?true:false;
    return result;
} */

/* function area(h, w) {
	
    if(h<=0 || w<=0){
        return -1;
    }
    
    return h*w;
}
 */
/* function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

console.log(concatName('arfan','khan')) */

/* function addUp(num) {
	let result = 0;
    for(let i = 1; i<=num; i++){
        result = result+i;
    }
    return result;
}

console.log(addUp(4)) */

/* function minMax(arr) {
    return [minNMath.min(...arr),Math.max(...arr)];
}

console.log(minMax([2,3,4,65,5])) */

/* function whichIsLarger(f, g) {
	if(f()>g()){
        return 'f';
    }else if(g()>f()){
        return 'g';
    }

    return 'neither';

    
}

console.log(whichIsLarger(()=>11,()=>11)); */

/* function binary(decimal) {
	return decimal.toString(2)
}
 */

// arr1 = [2,3]
// arr2 = [0,3];

/* function canNest(arr1, arr2) {
	let maxValueArr1 = Math.max(...arr1);
    let maxValueArr2 = Math.max(...arr2);
    let minValueArr1 = Math.min(...arr1)
    let minValueArr2 = Math.min(...arr2);

    const result = ((minValueArr1>minValueArr2)&&(maxValueArr1<maxValueArr2))?true:false;
    
}

canNest([1, 2, 3, 4], [2, 3]) */

/* let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Pass')
    }, 5000);
}) */

/* function numberSquares(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
    if (i > 1) {
      result = Math.pow(i, 2) + result;
    }
  }

  console.log(result);
}

numberSquares(2); */

// console.log(Math.pow(5,2))

/* function numberSquares(n) {
  let result = 1;
  
  if (n > 1) {
    result = Math.pow(n, 2) + result;
  }

  console.log(result);
}

numberSquares(3);
 */

// -------------------------------------------------------

// console.log(123);
// document.write('hello world')

/* let myDate = new Date();

const persons = {
  Name: "arfan khan",
  phone: 01234324,
  address: "72/1 sk das road,dhaka",
};

const myString = [2, 3, 4, 3];

let mySet = new Set(myString);
mySet.add(10);
mySet.delete(3);
console.log(Boolean(mySet.has(40)));
console.log([...mySet]); */

// type check in js
/* function inString(myString) {
  return myString.constructor === String;
}

console.log(inString("")); */

/* let sum = 0;

for(let i = 1; i<=10; i++){
    console.log(`${sum}+${i}=${sum+i}`);
    sum = sum + i ;
}

console.log(`result = ${sum}`); */

/* function LoopingAdd(param){
    let sum = 0;
    for(let i=1; i<=param;i++){
        sum+=i;
    }
    return sum;
    
}

console.log(LoopingAdd(10));
 */


// filter age loop krbo , condiiton get krbo and 
// true return ta if diye kaj koriye newArray te push krbo 
/* 
looping array ,
value pass of array ,
get true form callback 
if true pass to newArray  
*/


/* 
create function foreach,
array neya, 
cb er bitor value gulo pass kore dibo jate use krte pare 

*/

/* 
loop calabo 
cb te value pass krbo and get krbo true 
newArray banabo 
cb 1st time true tei push and newArray return krbo 

*/

//Foreach Emplement 

const a = 10;