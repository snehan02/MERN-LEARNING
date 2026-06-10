const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const submitBtn = document.getElementById("sub-btn");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
});

submitBtn.addEventListener("click", () =>{
    alert("Login successful!");
});