const express = require("express")
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

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
    throw new AppError("password required", 401);
    // res.send("sorry you need a password!!")
    // throw new APPError(401, "Password required")
})


app.get("/", (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send("home page!")
})

app.get("/error", (req, res) => {
    chicken.fly()
})

app.get("/dogs", (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send("woof woof!")
})

app.get("/secret", verifyPassword, (req, res) => {
    res.send("My secret is: Sometimes I wear headphones in public so I don't have to talk to anyone")
})

app.get("/admin",(req, res)=>{
    throw new AppError("You are not an Admin!", 403)
})

app.use((req, res) => {
    res.status(404).send("not found!")
})

// app.use((err,req,res,next)=>{
//     console.log("*****************************")
//     console.log("************ERROR************")
//     console.log("*****************************")
//     console.log(err)
//     next(err)
// })

app.use((err,req,res,next)=>{
    const {status = 500, message = "Something went wrong"} = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("app is running on localhost:3000")
})