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
    34.toFixed(2) = eita doshomit ber kore dekhai 
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
    math.pow(2,3) / 8
    floor(x),max(x, y, z, ..., n),sqrt(x),trunc(x) = inBuild function 
    w3school math reference dekh
    Math.ceil(Math.random()*10) = 1-10 rendom 
    // Returns a random integer from 1 to 10:
    Math.floor(Math.random() * 10+1);
    // get value of min-to max range
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
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
    switch (let value = 0) {
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
// 043. JS Array Declaration | JS All You Need to Know | JS Bangla Tutorials
    array loop can be  
// 044. JS Array Traversing | JS All You Need to Know | JS Bangla Tutorials

// 045. Array Insert Remove and Replace | JS All You Need to Know | JS Bangla Tutorials
    arr.push(value) = last push,
    arr.pop() = value come from last, .shift(), .unshift(value)
// 046. JS Search Value in Array | JS All You Need to Know | JS Bangla Tutorials
    arr.find((value, index, array) => {})
    arr.splice,
    arr.join,
// 047. Multidimensional Array | JS All You Need to Know | JS Bangla Tutorials

// 048. JS Reverse An Array | JS All You Need to Know | JS Bangla Tutorials

// 049. JS Array Methods | JS All You Need to Know | JS Bangla Tutorials

// 050. JS Object | JS All You Need to Know | JS Bangla Tutorials

// 051. JS Object Literal vs Constructor | JS All You Need to Know | JS Bangla Tutorials

// 052. Accessing Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 053. Setting Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 054. Remove Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 055. Comparing Two Objects in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 056. Iterate Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

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
*/

function Adding(a,b){
    return a+b;
}



// 062. Argument Object in Javascript | JS All You Need To Know | JS Bangla Tutorials
function display(){
    let param = [...new Set(Object.values(arguments))];
    console.log(param);
}
console.log(display(1,2,2,34,4));

// 063. Return Something from a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

*)function er bitor kichu return krle ta function er bitor joma hobe and ta console kre dekha lag be 
*)return hishebe amr (function,value,expression,component)
dite pari 

// 064. Function Expression in Javascript | JS All You Need To Know | JS Bangla Tutorials
*) kno kichu +- kore return kora 
// 065. Inner Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
funciton er bitor function lekhle 

// 066. Function Scoping in Javascript | JS All You Need To Know | JS Bangla Tutorials
funciton er scope hocche tar bitor er jinis return chara bahir access kora jabe na 
but bahir theke niye kaj krte parbe 

// 067. What is Functional Programming in Javascript | JS All You Need To Know | JS Bangla Tutorials


// 068. Pure Functions in Javascript | JS All You Need To Know | JS Bangla Tutorials
pure function hocce simple function ja onno funciton er upor depend na,
simple return kore , ektai nijer kaj kore 

// 069. First Class Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
first class funciton hocche (se var,parameter,object,array,other function er bitor call hote pare )

// 070. Higher Order Function in Javascript | JS All You Need To Know | JS Bangla Tutorials
ei function e amra funciton param hisebe pass and store krbo 
// 071. Closure First Look in Javascript | JS All You Need To Know | JS Bangla Tutorials
*)closer hocche age tomake bahir call krte hobe bitor pete

// 072. Callback Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

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

// 079. Return Function from Another Function in Javascript | JS All You Need To Know | JS Bangla

// 080. Recursive Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 081. Currying in Javascript | JS All You Need To Know | JS Bangla Tutorials

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

// 195. Window Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 196. Document Object in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 197. Selectors Part One in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 198. Selectors Part Two in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 199. GetElemetns Method vs Query Selector in Javascript | JS All You Need To Know | JS Bangla

// 200. How to Traverse DOM Elements in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 201. How to Loop Throw HTML Collections in Javascript | JS All You Need To Know | JS Bangla

// 202. Create DOM Elements in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 203. Insert Adjacent Element in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 204. Update & Remove any DOM Elements in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 205. How to Clone Node Include It's Child Elements in Javascript | JS All You Need To Know

// 206. How to Deal with Attributes in DOM Manipulation in Javascript | JS All You Need To Know

// 207. Styling DOM in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 208. Introduction to Event in DOM Manupulation in Javascript | JS All You Need To Know | JS Bangla

// 209. Event Delegation in DOM Manipulation | JS All You Need To Know | JS Bangla Tutorials

// 210. Input Box Event Handling in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 211. Check Box Event Handling in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 212. List and Input Event Handler in Javascript | JS All You Need To Know | JS Bangla Tutorials

// 213. Form Handling in DOM in Javascript | JS All You Need To Know | JS Bangla Tutorials

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
