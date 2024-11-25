import express from "express"

const app = express();

app.get("/",() => {
    console.log("app get")
})

app.listen(7555,() => {
    console.log("app 7555")
})