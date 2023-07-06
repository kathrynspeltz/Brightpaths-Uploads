
const message = document.querySelector("aside")

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector("input")

    const movie = document.createElement("li")

    let movieTitle = document.createElement("span")

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    const list = document.querySelector("ul")
    list.appendChild(movie)
    inputField.value = ""
}

document.querySelector("form").addEventListener("submit", addMovie)


function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}

