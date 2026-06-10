const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", getUsers);

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        result.innerHTML = "";

        data.forEach(user => {
            result.innerHTML += `<p>Name- ${user.name}</p><p> Email - ${user.email}</p> <br>`;
        });

    } catch (error) {
        result.innerHTML = "FAILED";
        console.log(error);
    }
}