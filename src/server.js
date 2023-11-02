import express from "express";

const PORT = 4000;

const app = express();

const handelHome = (req,res) => {
    return res.send("I still love you.");
}
const handelLogin = (req,res) => {
    return res.send("Login here.");
}

app.get("/", handelHome);
app.get("/login", handelLogin);

const handelListening = () =>{
    console.log(`✅Server listenting on port http://localhost:${PORT}💥`);
}

app.listen(PORT, handelListening);