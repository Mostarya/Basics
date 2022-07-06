function rollDice() {
    let goldCoins = 0;
    for (let i=0; i<10; i++) {
        const roll = Math.floor(Math.random()*6)+1;
        alert("You rolled a " + roll + "." );
        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }
        if (roll < 5) {
            continue;
        }
        if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;
            alert("You currently have " + goldCoins + " gold coins!");
            continue;
        }
        alert("Congratulations, you won " + roll + " gold coins!");
        goldCoins += roll;
        alert("You currently have " + goldCoins + " gold coins!");
    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}