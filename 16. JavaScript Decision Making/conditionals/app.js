// console.log("Before conditional");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("your number is less than 0.5!");
// } else {
//     console.log("your number is greater or equal than 0.5!");
// }
// console.log(random);
// console.log("After conditional");

// const dayOfWeek = prompt('enter a day').toLocaleLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("ughh i hate mondays!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("yahh i love saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// } else {
//     console.log("meh");
// }

// const age = 89;

// if (age < 5) {
//     console.log("You are a baby. you get in for free!");
// } else if (age < 10) {
//     console.log("you are a child. you pay $10");
// } else if (age < 65) {
//     console.log("you are an adult, you pay $20");
// }else{
//     console.log("you are a senior, you pay $10")
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {

    if (password.indexOf(" ") === -1) {
        console.log("valid passwrod");
    } else {
        console.log("password cannot contain spaces!");
    }
    
} else {
    console.log("password too short, must be 6+ characters!")
}

