function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    let dice1Image = document.getElementById("dice-1");
    let dice2Image = document.getElementById("dice-2");

    dice1Image.setAttribute("src", `./images/dice${dice1}.png`);
    dice2Image.setAttribute("src", `./images/dice${dice2}.png`);
}
