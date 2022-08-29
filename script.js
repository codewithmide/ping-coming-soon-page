const form = document.getElementById("form");
const email = document.getElementById("email");
const btn = document.getElementById("btn");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value.match(re)) {
        form.classList.remove("error");
    } else {
        form.classList.add("error");
    }
});