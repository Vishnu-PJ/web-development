const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const email = document.getElementById("email-user");
console.log(email);
console.log(email.value);

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    const result = document.createElement("p");
    if (email.value.match(pattern)) {
        console.log("Email is valid");

        result.innerText = "Email is valid";
        result.style.backgroundColor = "green";
        result.style.color = "white";
    } else {
        console.log("Email is not valid");

        result.innerText = "Email is not valid";
        result.style.backgroundColor = "red";
        result.style.color = "white";
    }
    document.body.appendChild(result);
});

const listElements = document.querySelectorAll("li");

for (let element of listElements) {
    element.style.backgroundColor = "blue";
}