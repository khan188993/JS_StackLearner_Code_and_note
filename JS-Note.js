// 000. Give Away Raffle Draw App | JS All You Need to Know | JS Bangla Tutorials

// 001. JS Course Introductions | JS All You Need to Know | JS Bangla Tutorials

// 002. Who is This Course For? | JS All You Need to Know | JS Bangla Tutorials

// 003. How to Use This Course Contents | JS All You Need to Know | JS Bangla Tutorials

// 004. Setup Working Environment | JS All You Need to Know | JS Bangla Tutorials

// 005. First Code of JS | JS All You Need to Know | JS Bangla Tutorials
/* 
sting + number = string and
number expression + string = string after calculate  
*/
// 006. What is Variables | JS All You Need to Know | JS Bangla Tutorials
/* 
1)variable is a container of data 
*/
// 007. JS Reserved Words | JS All You Need to Know | JS Bangla Tutorials
/* 
reserve work can't use as variable or other name in js 
*/
// 008. JS Data Types | JS All You Need to Know | JS Bangla Tutorials
    // *)premetive(string,integer etc) data type and object/reference(array,object,function) data typeof,
    //*)integer,infinity(number)float,boolen,array,object,hexa,octal,null,undefine 
    /* 
    1)Premetive(string,number,boolen) and reference(array,function,object) data type.
    2)undefine = undefine data type, null =Object  ,NaN= number , 
    -)premetive data type js define krse and object ta amra nije kore use kori 
    */
// 009. JS Basic Numbers | JS All You Need to Know | JS Bangla Tutorials
    Number.parseFloat(12);
    Number('20') // convert into number,
    Number.MAX_VALUE, Number.MIN_SAFE_INTEGER
    "arfna"*2 = NaN 
    10/0 = Infinity
    34.toFixed(2) = eita doshomit ber kore dekhai //343.33
    Number.NaN("3434"); = not a number check 
    Number object diye bibino type e convert korte pari onno data ke 
    console.log("2"+2) // 22 string 
    "2" * 2 // 4 integer convert,
    console.log(2+"2") //22 string 
    Number.isInteger.IsNaN.ToFix.ToString 
    numbers properties 

// 010. JS Basic Strings | JS All You Need to Know | JS Bangla Tutorials
    String(2344); string convert 
    23434.toString(); 
    single quote,dubble quete , template string 
    string methods,properties gulo 
    property = length ,
    methods = charAt() = w3school dekh reference

// 011. JS Basic Booleans | JS All You Need to Know | JS Bangla Tutorials
    false = 0,"",'',false,null,undefined,NaN 
    true = Infinity, - Infinity , -1,2,[],{}," "

    Boolean(0); false
// 012. JS Null & Undefined | JS All You Need to Know | JS Bangla Tutorials
    undefined without value of var declare = type of undefine
    /* 
    funciton return na krle and console krle undefined,

    */
    null value has but null in nothing = type of object | eita error show korbe na 
// 013. JS Type Conversion | JS All You Need to Know | JS Bangla Tutorials
    Boolean(23); String(); Number(); 
    false = 0,"",'',false,null,undefined,NaN 
    true = Infinity, - Infinity , -1,2,[],{}," "
    0,null, undefined,"", = false

// 014. Octal and Hexadecimal Numbers | JS All You Need to Know | JS Bangla Tutorials
    0x234 = hexa, 234.toString(16) = hexa 
    04324 = octal, typeof
// 015. JS Operators | JS All You Need to Know | JS Bangla Tutorials
    1)arithmetic(+,-,*,/,%) , 2)assignment(=),3)Incre/Decre(++,-- / post and pre),
    4)comparasion(>,>=,<,<=,==,===,!=,!==,), = 
    eita shudu premetive data type e direct check 
    krte parbo onno gulo Json.String krte hobe 
    krn reference data type all way alada hoi 
    5)logical(&&, || ,!) , 6) ternary(?), 7)bitwise (&& , |)
    true && console.log('hello');

    6)(let sum +=1; sum /=1; sum |=2; sum &=2;) expression + assignment hobe 
    typeof (23); eita tyep check kore 
    instanceof ([array]) = [arfan,'arfa'] in Array;
    for(let i = 0; i<10; i=i+2)
    /* 
    oparetor hocche oparetion kre thake oparend niye 
    operator er por enter dite parb + sting e concrit and number e adding operator 
    */


// 016. JS Statements | JS All You Need to Know | JS Bangla Tutorials
    console.log('message'); statement,
    /* 
    statement hocche kichu command jta ; diye end kora hoi 
    ekta programming eka dik statement diye make hoi,
    line by line statement kaj kore
    */
// 017. JS Math Functions | JS All You Need to Know | JS Bangla Tutorials
/* 

js er number er kichu default expression chara barti kaj krte 
math name ekta object ase setar kichu property,methods diye kaj kora jai 
math.property / math.method();
eita run hole direct value ta cole asbe 
*/
    Math.PI, Math.ceil(),
    Math.ceil(Math.random()*90+9);
    Math.round(342.2) = 342 
    math.abs(-23) / 23 alway positive Number,
    Math.min(34,434,34) 
    math.pow(2,3) / 8 3**2;
    floor(x),max(x, y, z, ..., n),sqrt(x),trunc(x) = inBuild function 
    w3school math reference dekh
    Math.ceil(Math.random()*10) = 1-10 rendom 
    // Returns a random integer from 1 to 10:
    Math.floor(Math.random() * 10+1);
    // get value of min-to max range
    function getRndInteger(min, max) {
        return Math.ceil(Math.random() * (max - min) ) + min;
      }
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
// 018. JS Data Functions | JS All You Need to Know | JS Bangla Tutorials
    let date = new Date(); = eita simple data type value dibe 
    // Sat Jan 29 2022 16:19:02 GMT+0600 (Bangladesh Standard Time)
    date.getDate(); eiguo diye date er particular kichu get krte parbo ,
    date.setDate(23); eita diye particular kichu set krte parbo,
    date.setDate(date.getDate()+10); = 10 din add with main date 
    new Date(2021,19); 2 ta atleast dite hobe 
    0 - 11 month count hoi 
    new Date().toDateString(); string e convert hobe 
    console.log(typeof new Date().toDateString()) = string 

    date.getDate();
    .toTimeString(), .toDateString(), etc
    //   Type check of value of date 
    function isDate(myDate) {
        return myDate.constructor === Date;
      }
// 019. JS Comments | JS All You Need to Know | JS Bangla Tutorials
    block , line comment,
// 020. JS Logic & Conditions | JS All You Need to Know | JS Bangla Tutorials
    if,else,else if, ?, break(pore),continue(age),nested if ,
    loop er bitor if , function er bitor if , || , && 
    switch(same type check krte ,) = multi check and same code run 
    // if, ternary ?
    else if, switch(same data check),
     ternary, |, nested if, break, continue with if, &&

     /* 
     kno kichu hoile kichu ekta korbo ,
     signgle true hole cari stop and flase hole run krbo 
     */
// 021. JS If Condition | JS All You Need to Know | JS Bangla Tutorials
/* 
simple kichu hoile run krbe. 
funciton e kichu return na krle se kintu undefined dekhabe tar console.log ba bitor kno code thakle o,
*/ if(true){} condition hisebe (>,>=,<,<=,==,===,!=,!==, && ||
, (2+3=5),4%2=0,value === "", typeof ""==='string'
,object check,array check,filter check  )
let num ="";
if(num){
    num = num;
}

//   Type check of value of date 
function isDate(myDate) {
    return myDate.constructor === Date;
  }

condition apply advance = ((true && true && false) || (true && true))


// 022. JS Else Condition | JS All You Need to Know | JS Bangla Tutorials
if(false){}else if(true){}else('default ')
// 023. JS Else If Condition | JS All You Need to Know | JS Bangla Tutorials
if(false){}else if(true){}else('default ')
// 024. JS Switch Statement | JS All You Need to Know | JS Bangla Tutorials
/* 
eita if,elseif,else er motoi kaj kore 
same value ta kaj krte gele eita use  krle valo 
same code run krte parbo multi condition diye 
*/

    value = 0;
    // switch(value)
    // switch(true)
    // switch (let value = 0) {
    switch (0) {
        case 0:
        // case value>0: switch must run 
        // case true:
            console.log("0 find")
            break;
    
        case 1:
        case 2:
            console.log("1 find")
            break;
    
        default:
            break;
    }
    // Day checking 

let Day = 'Sunday'; //Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday 
switch(Day.toLocaleLowerCase()){
    case 'sunday':
    // case 'monday': //we can use multi value 
        console.log('Date: Sunday');
        break;
    case 'monday':
        console.log('Date: monday');
        break;
    case 'wednesday':
        console.log('Date: wednesday');
        break;
    case 'thursday':
        console.log('Date: thursday');
        break;
    case 'friday':
        console.log('Date: friday');
        break;
    case 'saturday':
        console.log('Date: saturday');
        break;
    default:
        console.log('please give proper value');
}
// 025. JS Logical Operators | JS All You Need to Know | JS Bangla Tutorials
    || (single) &&(all) !(reverse),
// 026. JS Ternary Operator | JS All You Need to Know | JS Bangla Tutorials
   let result =  true ? "yes" : "no";
    condition ? expressionTrue : expressionFalse ;
    
    console.log(true?"arfan khan pass":"fail") //eita return + dirent console log krte parbo 

//if else style 
// Ternary oparator trick 
let simpleTer = (true)?'getValue':'Setvalue';

let result = false?"1st time false"
            :false?"2nd time true"
            :true?"4nd time true"
            :"3rd time true"

            console.log(result)

let TerResult = (5<2)?'5 greater than 2'
                :(5>2)?'true found'
                :(true)?'another found true'
                :'defalut found true'

console.log(TerResult)


// 027. And Or Shorthand | JS All You Need to Know | JS Bangla Tutorials
    let fname = file | "arfan";

    //Null  colleas oparator 
let name = name || 'Md Arfan Khan';
name="";
if(name.length===0){
    name = "Md Arfan Khan";
}

    true && console.log("run");
    false && console.log("not run")
// 028. Introduction to Loops | JS All You Need to Know | JS Bangla Tutorials

/* 
loop gurte thkbe false hoya ag porjonto and break(last),conitue(first) krte pari 
greater than decree,lessthan incre, i = i+2; incre 2 kore,
1)kno kichu ekadik bar run krte ba iterator krte caile loop use krbo 
for(number diye run hoi,) , while(same but lalada syntex),do(ek bar run krbioi )
for in(object proprety),for of(sob kichur value iterator krte pare)
.forEach((value, index, array) => {}) .map eigulo array iterator kore, map (modified krte pare,)
array iterator(filter,find,findIndex,reduce,map,)
[string and array hocche iterable and object iterable na,];
for(; ;){ while er moto kaj krbe }
*/
    something repeating 
    forloop(i=0;i<10;i++)
    , whileloop(true)
    ,do loop,
    for(x in arr)
    ,for(value of array)
    ,arr.foreach(function(value,index,arr){ }), 
    nested for loop
// 029. JS For Loop | JS All You Need to Know | JS Bangla Tutorials
let sum = 0;

for(let i = 1; i<=10; i++){
    console.log(`${sum}+${i}=${sum+i}`);
    sum = sum + i ;
}

console.log(`result = ${sum}`);

// 030. JS While Loop | JS All You Need to Know | JS Bangla Tutorials
/* 
while loop hocche only bitor condition run krbo and run shes e false krte hobe,
*/

//Alternative 
let isRunning = true;
while(isRunning){
    let Rand = Math.ceil(Math.random()*5);
    console.log(Rand)
    if(Rand ===4){
        console.log("Winner Winner Chicken Dinner");
        isRunning = false;
    }
 
}

//With Brack Statement 
while(true){
    let Rand = Math.ceil(Math.random()*5);
    console.log(Rand)
    if(Rand ===4){
        console.log("Winner Winner Chicken Dinner");
        break;
    }
 
}

// 031. JS Do While Loop | JS All You Need to Know | JS Bangla Tutorials



// 032. JS Nested Loops | JS All You Need to Know | JS Bangla Tutorials

//Loop Run by Iterator 
for(let i = 1; i<=5;i++){
    let Result = "";
    for(let j=1; j<=i; j++){
        Result +=j;
    }
    console.log(Result);
}
// 1
// 12
// 123
// 1234
// 12345

// 033. JS Break Statement | JS All You Need to Know | JS Bangla Tutorials
    last e use korbo, eita loop k thamai dei 
// 034. JS Continue Statement | JS All You Need to Know | JS Bangla Tutorials
    first e use korbo, eita loop er particular part skip kroe 
// 035. JS Infinity for Loop | JS All You Need to Know | JS Bangla Tutorials
    for(; ;) = while loop 
// 036. JS String | JS All You Need to Know | JS Bangla Tutorials
    "arfan".toUpperCase(); some string function show,
    .toLowerCase(), length,
    w3school er kichu string methods and property ase ja same array motoi 
    string iterable 
    'arfan khan' = string literal, 
    new Strign('constructor')

    new string(234);
// 037. String Literal vs Constructor | JS All You Need to Know | JS Bangla Tutorials
    'simple literal', new String('constructor').toString();
// 038. JS Escape Notation | JS All You Need to Know | JS Bangla Tutorials
    "arfan \"arfan \" khan" 
    \n = new line , escape notation gulo string er bitor dibo 
    \v 
// 039. JS String Comparison | JS All You Need to Know | JS Bangla Tutorials
    a is greater than A,
    z is greater than A ,
    small is greater than bigger,
    z is greater than a; 
    '001' ==1 = true;
// 040. JS String Methods | JS All You Need to Know | JS Bangla Tutorials
    .concat(items), .endsWith(searchString, endPosition)
    toUpperCase(), toLowerCase(),"arfan".substr(),.trim(),
    .split(splitter, limit)
    .length = properties 
    "arfan".charAt(5); 
    let yourString = "arfan khan";

let length = 0;

while(true){
    if(yourString.charAt(length)===""){
        console.log(length);
        break;
    }
    length++;
}
// 041. JS String Length | JS All You Need to Know | JS Bangla Tutorials

// 042. JS Array | JS All You Need to Know | JS Bangla Tutorials
    Array(2,3,4,5,34); [3,43,5,65,54]; [334,[343,3434,344,[343,32,1]]]

    arr[0] = "change"; multi array,single array,
    let result = JSON.stringify([1,2,3])===JSON.stringify([1,2,3]);
    console.log(result)
// 043. JS Array Declaration | JS All You Need to Know | JS Bangla Tutorials
    array loop can be,array is iterable   
// 044. JS Array Traversing | JS All You Need to Know | JS Bangla Tutorials
    array looping krte pari array.length diye OR(foreach,map,for of,in diye);

// 045. Array Insert Remove and Replace | JS All You Need to Know | JS Bangla Tutorials
    arr.push(value) = last push,
    arr.pop() = value come from last, .shift(), .unshift(value)
// 046. JS Search Value in Array | JS All You Need to Know | JS Bangla Tutorials
    arr.find((value, index, array) => {})
    arr.splice,
    arr.join,

    //Data found from Array, 

const arr = [3,32,43,5,6];
let Find = 5;
let isFound = false;

for(let i=0; i<arr.length;i++){
    if(arr[i]=== Find){
        console.log('Data Found in' + i + "Index");
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log("data not found");
}

// 047. Multidimensional Array | JS All You Need to Know | JS Bangla Tutorials
/* 
eita hocche array bitor array niye kaj kore 
*/
// Multidimentional array looping 

const arr = [
    [3, 4, 5, 6],
    [3, 4, 56, 6, 4],
    [3, 4, 67, 75, 4],
  ];
  
  for(let i= 0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
          console.log(`Index Of ${i}${j} = ${arr[i][j]}`)
      }
  }
// 048. JS Reverse An Array | JS All You Need to Know | JS Bangla Tutorials
//Array Reversing 

const arr = [23,23,3,4,5,45,4,3,4];

for(let i = arr.length-1; i>=0; i--){
    console.log(arr[i])
}
// Array which will reverse and sort 

function ArrayReverseAndSort(arr){
    let sortArray = arr.sort((a, b) => {b-a})
    return sortArray;
}

console.log(ArrayReverseAndSort([3,4,5,6,7,5,4]));

// Array Reverse by modified array 

const arr = [2,3,4,5,6];

for(let i = 0; i<(arr.length/2);i++){
    let temp = arr[i];
    arr[i] = arr[arr.length -1- i]
    arr[arr.length -1- i] = temp;
}

console.log(arr)
// 049. JS Array Methods | JS All You Need to Know | JS Bangla Tutorials

fill,concat,isArray,join,
//Array run with reference 

const a = [2,3];
let b = a;
b[0] =5;
console.log(a)

//Array run with reference but copy 

const a = [2,3];
let b = Array.from(a);
// let b = [...a];
b[0] =5;
console.log(a)
console.log(b)

// 050. JS Object | JS All You Need to Know | JS Bangla Tutorials
/* 
object hocce bostu kono and tar noun,adjective(property),verb hocche (methods);

*/
//! 051. JS Object Literal vs Constructor | JS All You Need to Know | JS Bangla Tutorials
{} = literal value  Object() eita constructor
// 052. Accessing Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials
const myObj = {
    name:'arfan',
    phone:34234,
    address:'72/1 sk das road',
}
let myName = 'name';

myObj.name;
myObj.name = 'shuvo' //changing
myObj['name'];
myObj.myName //eita error asbe 
myObj[myName];

// 053. Setting Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials
const myObj = {
    name:'arfan khan',
    phone:234232,
    address:'3432 3434 dfadf dfadf',
}
myObj.name = "shuvo khan" //changin value of obj
delete myObj.address; //address delete hoye jabe,
myObj.fevColor = 'blue'; //update new data 

console.log(myObj)

// 054. Remove Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 055. Comparing Two Objects in Javascript | JS All You Need To Know | JS Bangla Tutorials
const a = {name:'arfan'};
const b = {name:'arfan'};
console.log(a===b); //false;
console.log(JSON.stringify(a)===JSON.stringify(b)); //true;

// 056. Iterate Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

const person = {
    name:'arfan khan',
    phone:324234,
    address:'72/1 sk-das Dhaka,Bangladesh',
    code:54,
}

/*  for in / convert into array and iterated */

//for in 
for(let index in person){
    console.log(index,":",person[index])
}

let ArrayPersonValue = Object.values(person);
let ArrayPersonKeys = Object.keys(person);
let ArrayPersonObjectArray = Object.entries(person);
console.log(ArrayPersonValue)
console.log(ArrayPersonKeys)
console.log(ArrayPersonObjectArray)


// 057. Object Methods in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 058. What is Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

/* 
*)function hocche kichu code block er 
somoshito jar bitor external prm pathano jai and jokhon iccha call kora jai 
*)js er default object like
(new number,new string,new Array er bitor kichu method takhe ja asole function)
*)function er bitor kichu return krte hoi kaj krte hole, 
test er jonno console.log krte parbo 
*/
function displya(){
    return "calling funciton"
}
console.log(displya());




// 059. Defining a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
*)function k loop e diye run , 
function er bitor function shudo tar bitor e kaj krbe 

*/
// 060. Invoking a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 061. Function Arguments and Parameters in Javascript | JS All You Need To Know | JS Bangla Tutorial
/* 
*)function paremeter change kore kaj kora jai
*)perameter hishebe array k loop korte pari
*)param hisebe j kno kichu pass krte pari (array,function,object,null,etc all data type )
*/

function Adding(a,b){
    return a+b; //expression 
}

function addArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(addArray([2, 5]));



// 062. Argument Object in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
-)function er bitor this window k mean krbe but kno object er bitor direct child fun parent object k mean krbe 
-)argument, rest operator dite pari 
-)function e return na krle function undefined hobe but tar console and code run krbe just return krbe na ,
*/
function display(){
    let param = [...new Set(Object.values(arguments))];
    console.log(param);
}
console.log(display(1,2,2,34,4));

function display(){
    console.log(arguments[1]);
    console.log(arguments);
}

console.log(display(1,3,4,3,4,3,4))

function myFunc(...param){
    console.log(Array.isArray(param));
}

console.log(myFunc(3,33,3,3,2,3));


function greeting(greet,name) {
   
    function  firstName() {
        if(name){
            return name.split(" ")[0];
        }
        else{
            return "";
        }
    }

    let message = `${greet} ${firstName()}`;
    return message;

}

console.log(greeting('hello','arfan khan'));
// 063. Return Something from a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

*)function er bitor kichu return krle ta function er bitor joma hobe and ta console kre dekha lag be 
*)return hishebe amr (function,value(array, all data type ),expression,component)
dite pari 

// 064. Function Expression in Javascript | JS All You Need To Know | JS Bangla Tutorials
*) kno kichu +- kore return kora 
// 065. Inner Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
funciton er bitor function lekhle 

// 066. Function Scoping in Javascript | JS All You Need To Know | JS Bangla Tutorials
funciton er scope hocche tar bitor er jinis return chara bahir access kora jabe na 
but bahir theke niye kaj krte parbe 

function name01() {
    let name01Var = 'name01';
    function name02() {
        let name02Var = 'name02';
        console.log(name02Var);
        console.log(name01Var);
        return "";
        
    }
    return name02;
    // console.log(name02Var);
    
}

console.log(name01()())
//changing number by calling function 
let number = 0;

function changeNumber() {
    number = 10;
}

console.log(number)
changeNumber();
console.log(number)

//setinterval  = 
let n = 0;
setInterval(()=>{
    n++;
    console.log('setInterVal running',n);
},1000)

//function call changing value 
let n = 0;

function name() {
    n++;
    console.log(n);
}

console.log(name());
console.log(name());


// 067. What is Functional Programming in Javascript | JS All You Need To Know | JS Bangla Tutorials



// 068. Pure Functions in Javascript | JS All You Need To Know | JS Bangla Tutorials
pure function hocce simple function ja onno funciton er upor depend na,
simple return kore , ektai nijer kaj kore 

// 069. First Class Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
first class funciton hocche (se var,parameter,object,array,other function er bitor call hote pare )

// 070. Higher Order Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
ei function e amra funciton param hisebe pass and store krbo 

function add(a,b){
    return a+b;
}

function multiplication(a,b,c,myFunc){
    return c+ myFunc(a,b);
}

console.log(multiplication(1,2,3,add))


//Higher Order function 
function  add(a,b) {
    return a+b;
}

function multiplication(a,b,myFunc) {
    let c = a+b;
    let d = a-b;

    function  multi() {
        let e = myFunc(a,b);
        return c*d*e;
    }

    return multi()


}

console.log(multiplication(2,3,add))

//! 071. Closure First Look in Javascript | JS All You Need To Know | JS Bangla Tutorials
*)closer hocche age tomake bahir call krte hobe bitor pete

// 072. Callback Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
-)callback fun diye user k kichu value pass kore deya hoi kaj krte and tar kaj er upor depend kre take abr return kra hoi 
*/

callback funciton hocche age kisu data defination funciton k dibe kaj korte and pore seta collect krbe

const myArray = [23, 3, 4, 5, 4];

function Map(array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

let myMapArray = Map(myArray, (value) => {
    return value+2;
});

console.log(myMapArray);

// filter function 
function myFilter(myArray,cb){
    let newArray = [];
    for(let i= 0; i<myArray.length;i++){
       let callBackResult =  cb(myArray[i],i,myArray);
       if(callBackResult===true){
        newArray.push(myArray[i]);
       }
    }
    return (newArray);
}

console.log(myFilter([2,3,4,4,5],(v)=>{
    return v>3;
}));

// foreach 

let sum = 0;
function myForeach(myArray,cb){
    for(let i = 0; i<myArray.length; i++){
        cb(myArray[i],i,myArray);
    }
}

console.log(myForeach([2,3,4,5,6,54,4],(v,index,arr)=>{
    sum = sum +v;
}));

console.log(sum);
/* 
Debugging tricks = colsole.log krbo , debug tools diye stepping krbo ,
chorm diye debug ,
function call na krle console e function dekhabe and value return na thakle undefined
*/

// 073. Foreach Implementation in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 074. Map Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 075. Filter Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 076. Reduce Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 077. Find and FindIndex Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
const myArray = [23,3,4,5,6,4,5,4]
function myFind(myArray,cb){

    for(let i = 0;i<myArray.length;i++){
        let callBackResult = cb(myArray[i],i,myArray);
        if(callBackResult){
            
            // return myArray[i];
            // return i; for findIndex
        }
    }
    
}
console.log(myFind(myArray,(v)=>{
    return v>10;
}));
// 078. Sort, Some and Every Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
sort diye - asc/dsc order e sort kora hoi,
some - eita || er moto kaj krbe and true return krbe 
every - sob true hole true ,
*/

// 079. Return Function from Another Function in Javascript | JS All You Need To Know | JS Bangla



// 080. Recursive Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 081. Currying in Javascript | JS All You Need To Know | JS Bangla Tutorials
function displya(){
    return function add(){
        return funciton min(){
            return "hello";
        }
    }
}

function name() {
    return function name1(){
        return function name2() {
            return 'hello curring';
        }
    }
}

console.log(name()()())
// 082. Function Composition in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 083. Javascript Engine | JS All You Need To Know | JS Bangla Tutorials

// 084. Compiled vs Interpreted | JS All You Need To Know | JS Bangla Tutorials

// 085. Execution Context in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 086. Creation and Execution of Context in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 087. Variable Object Creation in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 088. Execution Context and Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 089. Hoisting in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 090. Function Declaration vs Expression in Javascript | JS All You Need To Know | JS Bangla Tutorial

// 091. Scope in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 092. Nested Scope in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 093. Lexical Scope in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 094. Scope Chain in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 095. Closure in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 096. Closure and Loops in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 097. Intro to OOP in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 098. Think Everything as an Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 099. Methods and Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 100. Class in OOP | JS All You Need To Know | JS Bangla Tutorials

// 101. Four Pillars of OOP | JS All You Need To Know | JS Bangla Tutorials

// 102. Abstraction | JS All You Need To Know | JS Bangla Tutorials

// 103. Encapsulation | JS All You Need To Know | JS Bangla Tutorials

// 104. Inheritance | JS All You Need To Know | JS Bangla Tutorials

// 105. Polymorphism | JS All You Need To Know | JS Bangla Tutorials

// 106. Intro to Object Oriented in Javascript | Stack Learner

// 107. Object Literal in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 108. "THIS" in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 109. Factory Pattern in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 110. Constructor Pattern in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 111. New Keyword in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 112. Factory vs Constructor in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 113. Constructor Property in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 114. Functions Are Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 115. Bind, Call, Apply in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 116. Pass By Value vs Pass By Reference in Javascript | JS All You Need To Know | JS Bangla Tutorial

// 117. Abstraction in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 118. Private Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 119. How to Use Getter Setter in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 120. Intro to Inheritance in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 121. Prototype and Prototypical Inheritance in Javascript | JS All You Need To Know | JS Bangla

// 122. Multi Level Inheritance in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 123. Property Descriptor in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 124. Constructor Prototype in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 125. Instance vs Prototype Members in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 126. Using Instance and Prototype Members in Javascript | JS All You Need To Know | JS Bangla

// 127. Iterate Object and HasOwnProperty in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 128. Don't Overwrite Built in Prototypes in Javascript | JS All You Need To Know | JS Bangla

// 129. First Prototypical Inheritance in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 130. Reset Constructor After Inheritance in Javascript | JS All You Need To Know | JS Bangla

// 131. Calling Super With Call Method in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 132. Creating Extends Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 133. Method Overriding in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 134. Polymorphism in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 135. When to Use Inheritance in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 136. Inheritance & Composition Mixing in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 137. What is ES6 in Javascript | Stack LearneJS All You Need To Know | JS Bangla Tutorials

// 138. Setup Your Environment | JS All You Need To Know | JS Bangla Tutorials

// 139. Template String in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 140. Let vs Const vs Var in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 141. Arrow Function Syntax in Javascript | JS All You Need To Know | JS Bangla Tutorials

const javascript = {
    name:'javascript',
    love: ['react','angular','vue'],
    operation: function() {
        // let self = this;
        return ()=>{
            console.log(this)
        }
    }
}

console.log(javascript.operation()());
// 142. Arrow Functions & This in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 143. Default Parameters in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 144. Custom Iteratable Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 145. Rest & Spread Operator in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 146. Enhance Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 147. Destructuring in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 148. Object From Entries in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 149. Symbols in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 150. Webpack 4 + Babel 7 | JS All You Need To Know | JS Bangla Tutorials

// 151. Iterator Basics in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 152. Iterator With Symbol in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 153. For of Loop in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 154. Generators in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 155. Set in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 156. Map in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 157. Weak Set in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 158. Weak Map in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 159. Class in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 160. Class Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 161. Static Method in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 162. "This" in Javascript Class | JS All You Need To Know | JS Bangla Tutorials

// 163. Private Data with Symbol in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 164. Private Properties with WeakMap in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 165. Getter & Setter in ES6 | JS All You Need To Know | JS Bangla Tutorials

// 166. Inheritance in ES6 in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 167. Method Overriding in ES6 in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 168. ES6 Modules System in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 169. Error in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 170. Error Handling with If Else in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 171. Error Handling with Try Catch in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 172. Throwing an Error in Javascript | Stack Learner

// 173. Finally Block in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 174. Optional Catch Binding in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 175. Custom Error in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 176. What is Asynchronous Programming in Javascript | JS All You Need To Know | JS Bangla Tutorials
    syncronus  wait kore asyncronas kore na,
    *)bank e ektar ager kaj shes na kore jmn porer jon aste pare na temn kaj syncronus 
    *)asyncronus jader jamela nai tader dekhiye dibe and jar jamela ase take side kore solve korabe,
    *)ansy te next kaj e move korte last kaj finish kora must na,
    *)ake age pabe take age dibe,
// 177. Asynchronous Programming is Action in Javascript | JS All You Need To Know | JS Bangla
    file FileSystem , database,web , rest Api 
   
    setTimeout(() => {
        console.log("i have done");
    }, timeout); = ansycronus function,

    setTimeout(() => {
        console.log("i have done 1")
    }, 5000);
    
    console.log("i have done 2")
    console.log("i have done 3")
    console.log("i have done 4")

    age 2,3,4 asbe last e 1 asbe, 
    j guloi asyncronus thakbe oigu last ei run korbe normal er,
    ansy funciton instantly run hoi na,
// 178. How to Store Result from Async Function in Javascript | JS All You Need To Know | JS Bangla
function sayName(name){
    let result;
    setTimeout(() => {
        result = name;
        console.log("I have Done" + name);
    }, 3000);

    return result;
}

console.log(sayName("arfan khan"));

function name() {
    
}

console.log(name()) = eita undefine funciton

ansycronus run er agei function call hobe tai undefine asbe,

ansycronus er kaj tar function er bitor e kora lagbe,
// 179. Why does Javascript Act Like Asynchronous | JS All You Need To Know | JS Bangla Tutorials
    js is a single thread language,
    but eita ansy hoyar krn e multi er moto kaj korte pare,
// 180. How JS Handle Asynchronous | JS All You Need To Know | JS Bangla Tutorials

    call stack , web api, callback, even loop,


// 181. v8 Engine in Javascript | JS All You Need To Know | JS Bangla Tutorials



// 182. How to Handle Asynchronous Tasks in Javascript | JS All You Need To Know | JS Bangla Tutorials



// 183. What is Ajax | JS All You Need To Know | JS Bangla Tutorials
    ansycronus task hangle e ajax, jquery, 
    ansychronus javascript and xml (json,) eita server api theke data ante use hoi xml,
    ajax kno url theke data hit kore amdr kache niye ase, only xml or json niye asche 
// 184. Ajax with Callback in Javascript | JS All You Need To Know | JS Bangla Tutorials
const xhr = new XMLHttpRequest();

xhr.open('get','https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function (e) {
    if(xhr.readyState ===4){
        if(xhr.status===200){
            let response = JSON.parse(xhr.response);
            console.log(response);
            console.log(xhr.readyState);
            console.log(xhr.status);
        }else{
            console.log(xhr.status);
        }
    }
}

xhr.send();

------------
function getRequest(url,callback) {
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
        console.log(usersValue.name);
        console.log(index);
        console.log(array);
    })
});



// 185. Callback Not Always Asynchronous in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 186. Why Not Callback in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 187. Introduction to Promise in Javascript | JS All You Need To Know | JS Bangla Tutorials
promise er vitor resolver and reject pabo pass hole resolver and fail hole reject run korbe,

let p1 = new Promise((resolver,reject) => {
    setTimeout(() => {
        resolver('hello arfan');
    }, 3000);
})

p1.then((v) => {
    console.log(v)
})

let p1 = new Promise((resolver,reject) => {
    setTimeout(() => {
        if(false){
            resolver('passed')
        }else{
            reject(new Error('fail bro'));
        }
    }, 3000);
})

p1
.then((v) => {
    console.log(v)
})
.catch((reject)=>{
    console.log(reject);
})

function getIphone(isPassed) {
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

console.log(getIphone(false));



function getIphone(isPassed) {
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

// 188. Implement Fetch API in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 189. Promise API in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 190. Async Await in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 191. Async Iterator in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 192. For Await of Loop in Javascript | JS All You Need To Know | JS Bangla Tutorials


// 193. Async Generators in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 194. Introduction to DOM | JS All You Need To Know | JS Bangla Tutorials
/* 
eita frontend dev e use hoi and eita diye html er element manipulation(add element,  remove,modified, anything can be manipulate) kre jai 
eita html tag gulo use kore ekta data-structure e sajai dom - eita tree dataStructure 
-)dom tree notice krte take dom e kno event or kichu diye manipute hoise ki na 
-)jmn html tag e new tag add kore amr browser reload kori change dikhi 
html tag gulo just simple string egulo js dom e convert kore kaj kroe, proti tag element k node e convert kroe dom tree te sajai 
dom e 4 doroner node = element node, text node(child Element),attribute node,comment node 
*/
// 195. Window Object in Javascript | JS All You Need To Know | JS Bangla Tutorials
*)mozila dev explore krbo 
*)browser er protita tab ek ekta window and tara alada eke opor theke 
*)window object er shate sob kichu attached kora and var use krle kaj kore 
*)window bitor document property niye khelai dom manipulation 
*)dom manipulation e document hocche window obje er child and js e window sob dore rakhe

console.log(window.document.location) //document.location dileo hobe krn browser bydefault window object e run kre 
// 196. Document Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

eita dom er sob kichu thakar parent object ja diyei dom manipulation kora hoi 
eita amdr sompurno webhmlt tag k dhore rakhe tar bitor ,
eita full html er selector ,

/* 
-)document er bitor html element er sob info ase and dom er sob kaj document object diye hoi jar parent window object 
*/
window.document /document krbo console.dir(document); full info pabo 
document.getElementById('idName')//class,tag,name, diye select krte pari
// 197. Selectors Part One in Javascript | JS All You Need To Know | JS Bangla Tutorials
eita diye html kno j ekta tab manipulation krbo seta select krbo 
document.getElementById('idname')
document.getElementsByClassName('className'); //eita htmlcollection dibe and array krte hobe 
document.getElementsByName('name-Attribute'); //eitao class er moti html collection dibe 
document.getElementsByTagName('tagName') // same work to upper,
eita carta html collection diye kaj  kore, childhtml Collection 

// (querySelector,querySelectorAll('#id,.class,tag,[attr]'));

console log kre dekhbo sob kichu dorse kina 
document.querySelector('.class') // #id [attr] tag eita single ekta select krbe 
document.querySelectorAll('.class') //eita akadik select krbe and eita childNode pass krbe loop krte hobe array convert kore 

// advance selection er bitor ache, dom traversing e 

let li = document.getElementById('single-list');
li.parentElement = tar parent element dibe console e,
li.children = tar children gulo dibe ( children thakle Htmlcollection dibe eita)
li.nextElementSibling =  next single bhai k dibe ,
li.previousElementSibling = previous siblin bhai k dibe 
li.firstElementChild = first child tag dibe
li.lastElementChild = last child tag dibe 
//note element bad dile shudu text gulo dibe 
//kno ekta selector k console.dir krle tar  bitor ki ase ki krte parbo sob bole dibe 
list.classList.add('hello') // eta diye new class add krte pari


/* 
id,class,tag,querySelector, html tag element gulo select  krte parbo 
tar bitor test pete or modified krte .innerHtml dibo 
input or form er bitor input er value pete input.value,
attribute add or modified krte , img.src = 'value';
selector.addEventListener('type', listener function, options) ; 
event (click,hover,kyepress,change,mouseenter.mouse)
*/

html tag element gulo dorar jonno selector use krbo and tarpor ja modified er dorkar krbo 


// 198. Selectors Part Two in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
single ta use krle 1st tai select krbe and all ta select krle sob select hobe 
document.querySelector('#id'/'.class'/'tagName') / eita 1st element tai niye ase only
*/

document.querySelectorAll('#id'); eita sob gulo select kre 
// 199. GetElemetns Method vs Query Selector in Javascript | JS All You Need To Know | JS Bangla
/* 
1)queryselector use kre node Element dei and getElement use kore htmlElement,
2)getElement better perform (eita specifiq node reuturn kre )
-)query diye sob somoy kaj nao hote pare but getElement kaj krbei 
*/

document.querySelectorAll('.class').constructor.name() eita diye tar proto dekhbo 
document.getElementById('id').constructor.name() eita diye tar proto dekhbo 

// 200. How to Traverse DOM Elements in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
eita hocche kno ekta selector er parentElement,childElement,nextSibling,previousElementSibling ki egulo ber krte pari  
*/

// advance selection er bitor ache, dom traversing e 

let li = document.getElementById('single-list');
li.parentElement = tar parent element dibe console e,
li.children = tar children gulo dibe ( children thakle Htmlcollection dibe eita)
li.nextElementSibling =  next single bhai k dibe ,
li.previousElementSibling = previous siblin bhai k dibe 
li.firstElementChild = first child tag dibe
li.lastElementChild = last child tag dibe 
//note element bad dile shudu text gulo dibe 
//kno ekta selector k console.dir krle tar  bitor ki ase ki krte parbo sob bole dibe 
list.classList.add('hello') // eta diye new class add krte pari

jodi loop krte cai kno element er child e seta array te convert krte hobe,
noito array loop methods kaj korbe na,


// 201. How to Loop Throw HTML Collections in Javascript | JS All You Need To Know | JS Bangla


let list = document.getElementById('list').children;

[...list].forEach((elem,index)=>{
    elem.innerHTML = `${index} ${elem.innerHTML}`;
    elem.style.color = "green";
})

// 202. Create DOM Elements in Javascript | JS All You Need To Know | JS Bangla Tutorials

function createElement(tagName, className, innerHtml) {
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHtml;
    tag.setAttribute("class", className);
    // tag.classList.add("adnan");
    return tag;
}

let p = createElement('p','arfan1 arfan2','arfan khan is a good boy');
console.log(p)

function createElement(tagName, InnerHtml, className) {
    let tag = document.createElement(tagName);
    tag.innerHTML = InnerHtml;
    tag.setAttribute('class',className);
    console.log(tag)
}

createElement('p','arfan ','hello')

//appending child in parent 

let list = document.getElementById('list');

append(list,p)

function append(parent,child){
    parent.appendChild(child);
}

function append(parent,child){
    child.forEach((elem)=>{
        parent.appendChild(elem);
    })
}

append(div,[p1,p2]);

/* 
append child niye kaj krbo append niye na,
*/
let list = document.getElementById('list');
list.className = 'list3' //ager class gulo cole giye just eita add hobe 

let list = document.getElementById('list').children;

[...list].forEach(v=>{
    v.innerHTML = "shuvo";
})


let li = document.getElementById('list');
li.className = 'list-items list-items-2';
hello.classList = ['arfan shuvo']; // kaj krbe ,
li.setAttribute('class','class1 class2');
li.innerHTML = 'value of inner html ';

list.appendChild(li)




// 203. Insert Adjacent Element in Javascript | JS All You Need To Know | JS Bangla Tutorials

/* 
after = tag er bahir e, before bitor e 
eita append er kaj kore kno tag er bitor ba bahir age ba last e 
*/
list.insertAdjacentElement('beforebegin',div); //bahir or list element show krbe 
list.insertAdjacentElement('afterbegin',div); //bahir or list element show krbe 
list.insertAdjacentElement('afterend',div); //bitor show 
list.insertAdjacentElement('beforeend',div); //bitor

document.getElementById('id').insertAdjacentElement('beforeEnd/afterEnd/','p')

// 204. Update & Remove any DOM Elements in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
eita kno ekta kichu k single vabe select kore remove() function marle remove hobe,
update krte caileo same select kre krte hobe 

*/
list.remove(); //remove hoye jabe
list.innerHTML = 'new Value'
list.innerHTML = 'new Value' + list.innerHTML; //eita ager+ new add krbe 
input.value = 'value pass in input';
input.value; // retrive input value ; input.type,input.value, input.name,

setTimeout(() => {
    list.remove();
    hello.innerHTML = `${hello.innerHTML} modified`;
    //5 sec por ja khushi krte pari 
}, 5000);

/* 
.remove() = diye select kroe remove krbo 
.innerHTML = diye updatekrbo , style/ classLIst add krte pari 

*/

// 205. How to Clone Node Include It's Child Elements in Javascript | JS All You Need To Know
/* 
eita diye kno  seletor k clone kre hoi true dile full clone hobe 
*/

let list = document.getElementById('list');
let cloneList = list.cloneNode(true) //full bitor er child soho clone hobe 
list.cloneNode(false) //defalut false eita use main tag tai clone hobe tar attr niye 

let cloneBtn = document.getElementById('clone');
let list = document.getElementById('list');
cloneBtn.addEventListener('click',function(event) {
    let listLastChild = list.lastElementChild.cloneNode();
    listLastChild.innerHTML = 'hello'
    list.appendChild(listLastChild);
})




// 206. How to Deal with Attributes in DOM Manipulation in Javascript | JS All You Need To Know
/* 
eita diye attribute ki ase and new attribute set krte pari 
*/
let hello = document.getElementById('hello');
hello.setAttribute('name','value value2');
hello.id = 'value';
hello.className = 'className';
list.setAttribute('class','value');
list.getAttribute(); //tar sob attr array te list asbe,
list.getAttributeNode('class'); //eita class er bitor ki ase dekhabe 
list.attributes // eita ekta object dibe tar attr sob er property er 
list.classList.add('new class');

let newAttr = document.createAttribute('name');
newAttr.value = 'arfan khan';
list.setAttributeNode(newAttr) ; //hard triks 

// 207. Styling DOM in Javascript | JS All You Need To Know | JS Bangla Tutorials
/* 
j kno ekta html k select kroe tar bitor style property diye style add kore ,
*/

document.body.style.background = 'red'
let hello = document.getElementById('hello');

hello.style = eita all style show krbe 

hello.style.backgroundColor = 'red' / 'rgb' / '#fff';

let styleObj = {
    backgroundColor:red,
    color:green
}

Object.assign(hello.style,styleObj); //eita append krbe style er bitor
list = document.getElementById('list').childre
[...list].forEach((li)=>{
    Object.assign(li.style,styleObj) //loop calaiye sob child e obj style add kroe 
})
// 208. Introduction to Event in DOM Manupulation in Javascript | JS All You Need To Know | JS Bangla
/* 
click,mouse,hover,changing value,wheen,kye press, submit form 
kichu ekta hole kichu ekta gotbe etai event 
-)kichu ekta ghotle ami j kichu ekta ghotate cai setai event handing
*/

event er bitor this hocche tar selector  and event er bitor target property vitor onk kichu ache kaj korar ,
event.target.value only input er guloi kaj  krbe 
let list = document.getElementById('form').firstElementChild;
list.addEventListener('mouseenter',function(e) {
    console.log(e.target.value)
    //event e kaj krbo target er bitor 
})

event j selector e lababo sudu setai kaj krbe ,


// 209. Event Delegation in DOM Manipulation | JS All You Need To Know | JS Bangla Tutorials
/* 
eita diye kno ekta parent e event lagiye child e manipulation krte pari
event lagabo parent ei but run krbe seta child er upor ,
*/

let list = document.getElementById('list');

list.addEventListener('click',function(e) {
    if(this.contains(e.target)){
        e.target.remove()
    }
})

// 210. Input Box Event Handling in Javascript | JS All You Need To Know | JS Bangla Tutorials
input niye kaj kora, input ouput show in browser,
eita input er vitor e.target hocche jtai event lagano seta targer, tar property .value 

// 211. Check Box Event Handling in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 212. List and Input Event Handler in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 213. Form Handling in DOM in Javascript | JS All You Need To Know | JS Bangla Tutorials
front end e jodi data handle na kore taile eitai shudu form validation ta dekhbo 
data handleing backend dekhbe but jodi single page application banai taile front end data hangle kre
obj krbe 
-)page refresh jodi hoi seta backend sekhbe but na krte caile refresh seta front end dekhbe 

let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = {};

    [...this.elements].forEach((elem)=>{
        if(elem.type !== 'submit'){
            formData[elem.name] = elem.value;
        }
        
    })
    this.reset();
    console.log(formData)
})

// 214. Form Validation in DOM in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 215. AJAX GET Request in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 216. Ajax Post Request in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 217. Conclusion of DOM Manipulation in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 218. What is Library | JS All You Need To Know | JS Bangla Tutorials



// 219. JQuery - Javascript DOM Library | JS All You Need To Know | JS Bangla Tutorials

// 220. Lodash - Javascript Utility Library | JS All You Need To Know | JS Bangla Tutorials

// 221. Underscore - Javascript Utility Library | JS All You Need To Know | JS Bangla Tutorials

// 222. Math JS - Javascript Math Library | JS All You Need To Know | JS Bangla Tutorials

// 223. Moment JS - Javascript Time Library | Stack Learner

// 224. Collect JS - Javascript Collection Library | JS All You Need To Know | JS Bangla Tutorials

// 225. Axios - HTTP Client | JS All You Need To Know | JS Bangla Tutorials

// 226. Conclusion of This Course | JS All You Need To Know | JS Bangla Tutorials

// 227. Frontend in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 228. Backend in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 229. Fullstack Development in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 230. Mobile Frameworks in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 231. Desktop Frameworks in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 232. Introduction to Our Project in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 233. Setup & Resources for Our Project | JS All You Need To Know | JS Bangla Tutorials

// 234. User Permission for Location | JS All You Need To Know | JS Bangla Tutorials

// 235. Setting Weather Information to DOM | JS All You Need To Know | JS Bangla Tutorials

// 236. Handle User Input in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 237. Setup Backend Server in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 238. MongoDB Database & Mongoose Setup | JS All You Need To Know | JS Bangla Tutorials

// 239. Create History Model in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 240. Create History Router in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 241. History Request & Update DOM in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 242. Using Callback to Post New History in Javascript | JS All You Need To Know | JS Bangla

// 243. Deploying Apps to Heroku | JS All You Need To Know | JS Bangla Tutorials

// 244.Should We Learn JavaScript in 2022? ২০২২ এ জাভাস্কিপ্ট শেখা কি ঠিক হবে?
