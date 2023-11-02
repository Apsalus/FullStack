import express from "express";

const PORT = 4000;

const app = express();

const handelHome = (req,res) => {
    return res.send("I still love you.");
}
const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    next();
}

const handelProtected = (req,res) => {
    return res.send("Welcome to the private lounge.");
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handelHome);
app.get("/protected" ,handelProtected);

const handelListening = () =>{
    console.log(`✅Server listenting on port http://localhost:${PORT}💥`);
}

app.listen(PORT, handelListening);