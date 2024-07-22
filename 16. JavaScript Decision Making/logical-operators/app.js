// const password = prompt("enter your password");

// if(password.length>=6 && password.indexOf(" ")===-1){
//     console.log("valid password")
// }else{
//     console.log("incorrect format for password!")
// }

// const age = -11;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("free");
// } else if (age >= 5 &&age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// }else{
//     console.log("invalid age")
// }

// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("try again!");
// }

// const age = 45;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("you are not a baby or a senior")
// }

const day = 7;
switch (day) {
    case 1:
        console.log("Monday!");
        break;
    case 2:
        console.log("tuesday!");
        break;
    case 3:
        console.log("wednesday!");
        break;
    case 4:
        console.log("thursday!");
        break;
    case 5:
        console.log("friday!");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;

    default:
        console.log("i don't know that");
}