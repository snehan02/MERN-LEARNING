
function checkPalindrome(){

    let text = document.getElementById("text").value;
    let reversed = text.split("").reverse().join("");
    let result = document.getElementById("result");

    if (text === reversed) {
        result.textContent = "It's a palindrome";
    } else {
        result.textContent = "It's not a palindrome.";
    }
}