console.log("Joke API");

const setupElement = document.querySelector("#setup");
const punchlineElement = document.querySelector("#punchline");

function addToDom(jokeObj) {
    setupElement.innerHTML = `<h4>${jokeObj.setup}</h4>`;
    punchlineElement.innerHTML = `<h4>${jokeObj.punchline}</h4>`
}

function getData() {

    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(result => result.json())
    .then(parsedJSON => {
        console.log("joke", parsedJSON);
        addToDom(parsedJSON);
    })
}

const button = document.querySelector("#btn-getData");
button.addEventListener("click", getData);






