const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("you clicked me")
    console.log("hope it works")
}

function scream() {
    console.log("aaaaaaaaaaaaaaaaaa");
    console.log("STOP TOUCHING MEEEEEEE");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
    alert("youo licked the h1!")
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
    alert("clicked!!!")
})

function twist() {
    console.log("twist")
}

function shout() {
    console.log("shout")
}
const tasButton = document.querySelector("#tas");
tasButton.addEventListener("click", twist, {once: true});
tasButton.addEventListener("click", shout);

