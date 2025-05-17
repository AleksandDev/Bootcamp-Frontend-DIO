const emojis = [
    "😎",
    "😎",
    "🤓",
    "🤓",
    "👽",
    "👽",
    "💀",
    "💀",
    "🗿",
    "🗿",
    "😶‍🌫️",
    "😶‍🌫️",
    "🤠",
    "🤠",
    "👻",
    "👻",
];
let openCards = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createGame() {
    const gameContainer = document.querySelector(".game");
    gameContainer.innerHTML = ""; 
    const shuffledEmojis = shuffleArray([...emojis]);
    
    shuffledEmojis.forEach(emoji => {
        const box = document.createElement("div");
        box.className = "item";
        box.innerHTML = emoji;
        box.addEventListener("click", handleClick);
        gameContainer.appendChild(box);
    });
}

function handleClick() {
    if (this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
        return;
    }
    
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [firstCard, secondCard] = openCards;
    
    if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add("boxMatch");
        secondCard.classList.add("boxMatch");
    } else {
        firstCard.classList.remove("boxOpen");
        secondCard.classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        setTimeout(() => {
            alert("Você venceu!");
            createGame();
        }, 500);
    }
}

createGame();

document.querySelector(".reset").addEventListener("click", createGame);