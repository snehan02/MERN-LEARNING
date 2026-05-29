//console.log ("hello");


/* 
let fullname = "Sneha";
let age = 22;
let isStudent = false;


document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

//operators
let students = 23;
students  = students-2;

console.log(students);


//easyway to take input
let username = window.prompt("what's ur name?");
console.log(username);


//
let username; 
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello ${username}`;
    console.log(username);
}
    
    

//type conversions
let x;
let y;
let z;
x = Number (x);
y = String(y);
Z = Boolean(z);

console.log(x ,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);


//counter program
const decreaseBtn = document.getElementById("decBtn");
const resetbtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

  //math
  let x = 3.4;
  let y = 3.9;
  let z;
  z = Math.round(x);
  z = Math.floor(x);
  z = Math.ceil(y);
  z = Math.pow(z,3);
  z = Math.sqrt(z);
  z = Math.abs(-5);
  z = Math.log(x);
  let k = Math.random();

  console.log(z);

*/
const mytext = document.getElementById("mytext");
const submitbtn = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");

submitbtn.onclick = function(){
let age = mytext.value;
age = Number(age);

if (age >= 18){
    resultelement.textContent = "you can adult";
}
else if (age >= 13 && age < 18){
    resultelement.textContent = "you are a teenager";
}
else{
    resultelement.textContent = "you are a child";
}


}