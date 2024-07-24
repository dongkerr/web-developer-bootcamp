const button = document.querySelector("button");
const h1 = document.querySelector("h1");
// button.addEventListener("click", function () {
//     document.body.style.backgroundColor = makeRandColor();
//     h1.innerText = makeRandColor()
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

button.addEventListener("click", function () {
    const [r, g, b] = makeRandColor()
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`
    if (r < 50 || g < 50 || b < 50) {
        h1.style.color = "rgb(255,255,255)";
    } else {
        h1.style.color = "black";
    }
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}