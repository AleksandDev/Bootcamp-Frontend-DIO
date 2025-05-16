let nomeHeroi = prompt("Qual será o nome do seu Héroi?");
let xpHeroi = parseInt(prompt("Quantos pontos de experiência o seu Héroi tem?"));

for (let i = 0; i < 3; i++) {
    if (xpHeroi < 0) {
        alert("Pontos de experiência não podem ser negativos. Tente novamente.");
        xpHeroi = parseInt(prompt("Quantos pontos de experiência o seu Héroi tem?"));
    }
}

let nivelHeroi
switch (true) {
    case (xpHeroi < 1000):
        nivelHeroi = "Ferro";
        break;

    case (xpHeroi > 1001 && xpHeroi < 2000):
        nivelHeroi = "Bronze";
        break;

    case (xpHeroi > 2001 && xpHeroi < 5000):
        nivelHeroi = "Prata";
        break;

    case (xpHeroi > 5001 && xpHeroi < 7000):
        nivelHeroi = "Ouro";
        break;

    case (xpHeroi > 7001 && xpHeroi < 8000):
        nivelHeroi = "Platina";
        break;

    case (xpHeroi > 8001 && xpHeroi < 9000):
        nivelHeroi = "Ascendente";
        break;

    case (xpHeroi > 9001 && xpHeroi < 10.000):
        nivelHeroi = "Imortal";
        break;

    case (xpHeroi >= 10.001):
        nivelHeroi = "Radiante";
        break;
}

alert("O Héroi " + nomeHeroi + " é do nível " + nivelHeroi + " com " + xpHeroi + " pontos de experiência.");