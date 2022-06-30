const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3031,()=>{console.log("inicializando servidor en http://localhost:3031");})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"));
})