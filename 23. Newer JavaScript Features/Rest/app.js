// function sum() {
//     return arguments.reduce((total, el)=> total + el)
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function recaResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDEL GOES TO ${gold}`)
    console.log(`SILVER MEDEL GOES TO ${silver}`)
    console.log(`THANKS TO EVERYONE ELSE ${everyoneElse}`)
}

