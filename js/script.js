//adding eventListener to button 
document.getElementById("button").addEventListener("click", function(e) {
    //adding fetch command
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then(data => renderJoke(data))
    .catch(() => renderError());
});

//function to render joke
function renderJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
    //clearing error message if user tries again and succeeds
    const error = document.getElementById("error");
    error.innerHTML ="";
}

//handling errors
function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Uh-oh, something broke! Please try again.";
}


