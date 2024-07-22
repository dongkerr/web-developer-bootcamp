// let count = 0;
// while(count<10){
//     console.log(count);
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter your secret code....");

// while (guess != SECRET) {
//     guess = prompt("enter your secret code....");
// }
// console.log("congrats! you got the secret")

// let input = prompt("hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("ok you win!")


// for(let i=1; i <1000; i++){
//     console.log(i);
//     if(i===100) break;
// }


let maximum = parseInt(prompt("enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = prompt("enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) != targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:"); 
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("invalid guess, plase enter a number or 'q' to quit")
    }

}
if (guess === 'q') {
    console.log("ok, you quit!")
} else {
    console.log(`you got it! it took you ${attempts} guesses`);
}
