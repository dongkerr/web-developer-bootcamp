const express = require("express")
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"))

app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use("/dogs", (req, res, next) => {
    console.log("I love dogs!")
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === "chickennugget") {
        next();
    }
    res.send("sorry you need a password!!")
})

// app.use((req, res, next)=>{
//     console.log("this is my middleware!")
//     return next()
//     console.log("this is my middleware -- after the first next()!")
// })
// app.use((req, res, next)=>{
//     console.log("this is my second middleware!")
//     return next()
// })

// app.use((req, res, next)=>{
//     console.log("this is my 3rd middleware!")
//     return next()
// })

app.get("/", (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send("home page!")
})

app.get("/dogs", (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send("woof woof!")
})

app.get("/secret", verifyPassword, (req, res) => {
    res.send("My secret is: Sometimes I wear headphones in public so I don't have to talk to anyone")
})

app.use((req, res) => {
    res.status(404).send("not found!")
})

app.listen(3000, () => {
    console.log("app is running on localhost:3000")
})