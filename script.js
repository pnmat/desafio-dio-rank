let victory = 99;
let defeat = 5;

function rankLv(victory, defeat){
    let totalVictory = victory - defeat
    let rankName = ""
    if(totalVictory <= 10) rankName = "Ferro"
    if(totalVictory >= 11) rankName = "Bronze"
    if(totalVictory >= 21) rankName = "Prata"
    if(totalVictory >= 51) rankName = "Ouro"
    if(totalVictory >= 81) rankName = "Diamante"
    if(totalVictory >= 91) rankName = "Lendário"
    if(totalVictory >= 101) rankName = "Imortal"


    return `O Herói tem de saldo de ${totalVictory} win e está no rank ${rankName}`
}

let rankedLv = rankLv(victory, defeat)

console.log(rankedLv)