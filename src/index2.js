//take 1

const gameList = document.querySelector(".game-list");
const image = document.querySelector("#detail-image");
const gameName = document.querySelector("#detail-title");
const highScore = document.querySelector("#detail-high-score");
const form = document.querySelector("#high-score-form")
const scoreInput = document.querySelector("#score-input")
const spanId = document.querySelector("#detail-high-score")

fetch("  http://localhost:3000/games")
.then(res => res.json())
.then(data => {
    data.forEach(game => {
        const h5 = document.createElement('h5');
        h5.textContent = `${game.name} (${game.manufacturer_name})`;
        gameList.append(h5)

        h5.addEventListener("click", e => {
            addGames(game)
        })

    })
    addGames(data[0])

})

function addGames(gameinput){
    image.src = gameinput.image;
    gameName.textContent = gameinput.name;
    highScore.textContent = gameinput.high_score

}


let oneGame = 0

form.addEventListener("submit", e => {
    e.preventDefault();
    spanId.textContent = oneGame += parseInt(scoreInput.value)
})

//end of take 1