// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs)
// }

// let bird = "Scarlet Macaw";
// function birdWatch(){
//     let bird = "Great Blue heron"
// }

// let radius = 8;
// if(radius > 0){
//     const PI = 3.14159;
//     let msg = "HIII"
// }
// console.log(radius);
// console.log(PI);

// for(let i = 0; i < 5; i++){
//     let msg = "asdfsufhu";
//     console.log(msg);
// }
// console.log(msg);

// function bankRobbery() {
//     const heroes = ["spiderman", "black panther"];
//     function cryForHelp() {
//         let color = "purple"
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`please help us, ${hero.toUpperCase()}`);
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// function add(x,y){
//     return x + y;
// }

// const add = function(x,y){
//     return x + y;
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++){
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("congrats, you win a million dollars")
//         }
//     } else {
//         return function () {
//             alert("you have veen infected by a virus")
//             alert("stop trying to close this window")
//             alert("stop trying to close this window")
//             alert("stop trying to close this window")
//             alert("stop trying to close this window")
//             alert("stop trying to close this window")
//             alert("stop trying to close this window")
//         }
//     }
// }

// function makeBetweenFunc(min, max){
//     return function(num){
//         return num >= min && num <=  max;
//     }
// }

// function isBetween(num){
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num){
//     return num >= 1 && num <= 10;
// }

// const myMath = {
//     PI: 3.1415926,
//     square: function (num){
//         return num*num;
//     },
//     cube: function(num){
//         return num*num*num;
//     }
// }

// const myMath = {
//     PI: 3.1415926,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num * num * num;
//     }
// }

// const cat = {
//     name: "blue steele",
//     color: "grey",
//     breed: " scottish fold",
//     meow() {
//         console.log("this is:", this)
//         console.log(`${this.name} says meowwww`)
//     }
// }

// const meow2 = cat.meow;



// try {
//     hello.toUppercase();
// } catch {
//     console.log("errorr!!!")
// }

// console.log("afterrrr")

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e){
        console.log("please pass astring next time!")
    }
}