//!)String Methods and Properties
/* 
we can run iterable methods in strings 

*/
//?Methods
// charAt()	Returns the character at a specified index (position)
console.log('........charAT........');
console.log('Arfan khan'.charAt(1));



// charCodeAt()	Returns the Unicode of the character at a specified index
console.log('........charCodeAt........');
console.log('Arfan khan'.charCodeAt(1));


// concat()	Returns two or more joined strings
console.log('........concat........');
let concatWith = "Arfan";
console.log(concatWith.concat("Khan","Is","a","Good","Boy"));



// endsWith()	Returns true if a string ends with a specified value
console.log('........endsWith........');
let endsWith = "arfan khan is a good boy";
console.log(endsWith.endsWith('good boy'));
console.log(endsWith.endsWith('khan',10)); //10 hocche length ('value',lenght);



// fromCharCode()	Returns Unicode values as characters
console.log('........fromCharCode........');
console.log(String.fromCharCode(1,23,34)); // number dile Char code return kore string hisebe 


// includes()	Returns true if a string contains a specified value
console.log('........includes........');
let includes = "arfan khan is a good boy";
console.log(includes.includes('arfan')); //true array teo same kaj 
console.log(includes.includes('shuvo')); //false



// indexOf()	Returns the index (position) of the first occurrence of a value in a string
console.log('........indexOf........');
let indexOf = "Arfan Khan";
console.log(indexOf.indexOf('n')); 
console.log(indexOf.indexOf('n',5)); //5 index position of caracter 


// lastIndexOf()	Returns true the index (position) of the last occurrence of a value in a string
console.log('........lastIndexOf........');
let lastIndexOf = "Arfan Khan";
console.log(lastIndexOf.lastIndexOf('n')); 
console.log(lastIndexOf.lastIndexOf('n',4)); //4 index position of caracter 

// localeCompare()	Compares two strings in the current locale
// match()	Searches a string for a value, or a regular expression, and returns the matches
// repeat()	Returns a new string with a number of copies of a string
console.log('........repeat........');
let repeat = "Arfan Khan ";
console.log(repeat.repeat(2)); 


// replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
//*simple replace 
console.log('........replace........');
let replace = "Arfan Khan ";
console.log(replace.replace("Arfan","Shuvo")); //Arfan replace with shuvo in find 1st string only

//*Global and soft match 
let GlobalReplace = "arfan khan is a good boy.Arfan khan always goes to school";
console.log(GlobalReplace.replace(/Arfan/i,'Shuvo')); // i for string soft match, g for global 
console.log(GlobalReplace.replace(/Arfan/gi,'Shuvo')); // i for string soft match, g for global 

//*A function to return the replacement text into UpperCase :
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});
console.log(result)




// search()	Searches a string for a value, or regular expression, and returns the index (position) of the match

/* JavaScript Search Methods
String indexOf() 
String lastIndexOf()
String startsWith()
String endsWith()
 */

//*eita indexOf er motoi kichuta, 
console.log('........search........');
let search = "Arfan Khan";
console.log(search.search('n')); 
console.log(search.search('n')); //index position of caracter deya jabe na


// slice()	Extracts a part of a string and returns a new string
/* 
The slice() method
The splice() method
The split() Method = Array te convert krbe 
The substr() Method = same as slice but last kom bola jai na
The substring() Method
slice(start, end)
substring(start, end) = - sign use krte parbo na 
substr(start, length) = 
 */

console.log('........slice........');
let slice = "Arfan Khan";
console.log(slice.slice(6,9)); //Starting kom 6te and end kom 9 te 


// split()	Splits a string into an array of substrings

console.log('........split........');
let split = "Arfan Khan";
console.log(split.split('')); //String k array te modified krbe break point theke
console.log(split.split('',3)); //String k array te modified krbe break point theke and limit krbe
console.log(split.split(' ')); //String k array te modified krbe break point theke
console.log(split); //main String change korbe na



// startsWith()	Checks whether a string begins with specified characters
console.log('........startsWith........');
let startsWith = "Arfan Khan";
console.log(startsWith.startsWith("Arfan")); //simple start 
console.log(startsWith.startsWith("khan",7)); //simple start 

// Start at position 6:
text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world", 7))


// substr()	Extracts a number of characters from a string, from a start index (position)
console.log('........substr........');
let substr = "Hello world!";
console.log(substr.substr(1, 4))
console.log(substr.substr(-5, 5))
console.log(substr.substr(substr.length-1, 1))


// substring()	Extracts characters from a string, between two specified indices (positions)
// *)see w3school explanation ,eita swip kore,simple lekha
// toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
console.log('........toLocaleLowerCase........');
let toLocaleLowerCase = "HELLO world!";
console.log(toLocaleLowerCase.toLocaleLowerCase())
// toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
console.log('........toLocaleUpperCase........');
let toLocaleUpperCase = "HELLO world!";
console.log(toLocaleUpperCase.toLocaleUpperCase())

// toLowerCase()	Returns a string converted to lowercase letters
console.log('........toLowerCase........');
let toLowerCase = "HELLO world!";
console.log(toLowerCase.toLowerCase())
console.log(toLowerCase.toUpperCase())


// toString()	Returns a string or a string object as a string
console.log('........toString........');
let toString = 343242;
console.log(toString.toString());
console.log(toString.toString(2)); //binary convert 


// toUpperCase()	Returns a string converted to uppercase letters
console.log('........toUpperCase........');
let toUpperCase = "HELLO world!";
console.log(toUpperCase.toUpperCase())



// trim()	Returns a string with removed whitespaces
console.log('........trim........');
let trim = "         HELLO world!    ";
console.log(trim)
console.log(trim.trim())


// valueOf()	Returns the primitive value of a string or a string object

//?Properties 
//Length Properties
console.log('........Length........');
let Length = "         HELLO world!    ";
console.log(Length.length)
