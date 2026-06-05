let key = prompt("enter the key you want");
let value = prompt("enter the value you want");

localStorage.setItem(key,value);
console.log(`The value at ${key} is $(localStorage.getItem(key))`);  