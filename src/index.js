const gameList = document.querySelector(".game-list")
const image = document.querySelector("#detail-image")
const gameName = document.querySelector("#detail-title")
const highScore = document.querySelector("#detail-high-score")
const form = document.querySelector("#high-score-form")
// const enterScore = document.querySelector ('#detail-high-score')


fetch("http://localhost:3000/games")
.then(res => res.json())
.then(data => {
    data.forEach(game => {
    const h5 = document.createElement("h5")
    h5.textContent = (`${game.name} (${game.manufacturer_name})`)
    gameList.append(h5)

    h5.addEventListener("click", e => {
        addGameList(game);
    })

    })
    addGameList(data[0])
})

function addGameList(game) {
    image.src = game.image;
    gameName.textContent = game.name;
    highScore.textContent = game.high_score;
}



const scoreInput = document.querySelector('#score-input')

form.addEventListener("submit", e => {
    e.preventDefault();
    const newHighScore = scoreInput.value
    highScore.textContent = newHighScore
})