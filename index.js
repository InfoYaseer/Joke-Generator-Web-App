const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJoke() {
    jokeContainer.classList.remove("fade");
    jokeContainer.textContent = "Loading joke...";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            jokeContainer.textContent = data.joke;
            jokeContainer.classList.add("fade");
        })
        .catch(() => {
            jokeContainer.textContent = "Oops! Something went wrong 😐";
        });
}

btn.addEventListener("click", getJoke);
