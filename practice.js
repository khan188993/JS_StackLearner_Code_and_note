/* 
1)selecting dom element, = id,class,tag,name| querySelector ,all,
2)dom treversing = .nextSibling, nextElementSibling(na thakle null), children,parent, appendChild,
3)dom manipulation 

createElement, 


*/

/* 
tag,className,innnerHTML writing 

*/

/* function createElement(tagName,className,innerHtml){

    let tag = document.createElement(tagName);
    tag.innerHtml = 'arfankha';
    
    return tag;
    

}

console.log(createElement('p','class1 class2','arfan khan is a good boy'))

let hello = document.getElementById('hello');

hello.addEventListener('click',(e)=>{
    alert('hello is clicking');

})
 */

/* 
-)loop krbo ,
-)bahire result assing krbo 
-)if result > hoi taile oitai rakhbo noi change value dibo 

*/

// 0,1,1,2,3,5,8 = 7

/* 
loop calate hobe number diye,
-)last number and next number add krte hobe and result e assign krte hobe 
-)last e result return krbo 
*/

/* let container = document.getElementById('container')
let p = document.createElement('p');
p.innerHTML = "arfan khan is a good boy";
container.appendChild(p);
console.log(container) */

/* function createElement(tagName, InnerHtml, className) {
    let tag = document.createElement(tagName);
    tag.innerHTML = InnerHtml;
    tag.setAttribute('class',className);
    console.log(tag)
}

let p = createElement('p','arfan ','hello');

function  append(childName) {
    document.getElementById('container').appendChild(p);
    // parentName.appendChild(childName);
}
let container = document.getElementById('container');
append(p); */

/* let list = document.getElementById('list').children;

[...list].forEach((elem,index)=>{
    elem.innerHTML = `${index} ${elem.innerHTML}`;
    elem.style.color = "green";
}) */

/* function createElement(tagName, className, innerHtml) {
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHtml;
    tag.setAttribute("class", className);
    // tag.classList.add("adnan");
    return tag;
}

let p = createElement('p','arfan1 arfan2','arfan khan is a good boy');
console.log(p)
 */

// let hello = document.getElementById('hello');
/* 
btn click krle jate ul er last child ta clone hoi ekbar kore 

*/



let Name = document.getElementById('name');

Name.addEventListener('keypress',function(e) {
    // e.preventDefault();
    if(e.key ==' '){
        console.dir(e.target.value)
        e.target.value = "";
    }
    
})