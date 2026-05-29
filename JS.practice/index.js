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

//if else statement
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
//ternary operator
let time = 16;
let greeting = time<12 ?"good morning": "good afternoon";
console.log (greeting)ll

//string operation
let username = "sneha";
console.log (username.charAt(0));
console.log (username.length)
let results = username.includes("w");
console.log (results)

//slicing 
const email = "snehan@gmail.com";
let username = email.slice(0,email.indexOf("@"));
console.log(username);

//Method chaining 
//without method chaining
let user = window.prompt("what's your name?");
//username = user.charAt(0);
//username = username.toUpperCase();
//snehasnehconsole.log(username);

//with method chaining 
user = user.charAt(0).toUpperCase();
console.log(user);

//logical operators
let temp = 88;

if (temp >25 && temp<31){
    console.log("weather is Good");
}
else if (temp >30 && temp <40){
    console.log("weather is hot");
}
else if (temp <15 || temp >40){
    console.log ("it is Extream Weather");
}

//While loop
let loggedIn = false;
let username;
let password;

while (!loggedIn){
    username = window.prompt("enter your name");
    password = window.prompt("enter your password");
    if (username === "sneha" && password === "123"){
        loggedIn = true;
        console.log("you are logged in successfully");
    }
    else{
        console.log("invalid username");
    }
}

*/

//Temperature converter
