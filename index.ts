import express from "express";

const PORT = 3000;
const app = express();

app.use('/', (req, res)=>{
    res.send("Hello")
});

app.listen(PORT, ()=>{
    console.log(`Listening on port`, PORT)
})