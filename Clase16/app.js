const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"))
})
app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"))
})
app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"))
})
app.get("/home.html",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.listen(3000,()=>{
    console.log("Se ha iniciado el servidor en http://localhost:3000")
})
