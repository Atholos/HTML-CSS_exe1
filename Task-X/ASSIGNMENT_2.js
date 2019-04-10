'use strict';
//1.STRAWBERRY
const sb =document.getElementById('berry').style.backgroundColor = "red";
console.log(document.getElementById('berry'));
console.log(document.getElementById('berry').innerHTML);

//2.ORANGE
const orange = document.querySelector('[data-foodtype="squishy"]');
orange.setAttribute('style','background-color: orange');
console.log(orange);
console.log(orange.innerHTML);

//3.1 LIST
const list = document.getElementsByTagName("li");
console.log(list);

//3.2 FOR LOOP
console.log("Using the for loop here:");
let text2 = "";

for(let i = 0; i < list.length; i++) {
  text2 =list[i].innerHTML;
  if(text2 === 'Pear'){
    list[i].style.backgroundColor = "Green";
  }
  list[i].style.width ="100px";
  list[i].style.listStyle = "none";
  console.log(text2);
}

//4.1 QuerySelectorALL
const querList=document.querySelectorAll('li');
console.log(querList)


//4.2
console.log("Using forEach here:");
querList.forEach((element) =>{
  console.log(element.innerText);
  element.style.border = "1px solid black"
});