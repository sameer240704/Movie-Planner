const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4000;
const uri = "mongodb://localhost:27017/movie-app";

app.listen(PORT, (err) => {
    if(err) console.log(`Port Error : ${err.message}`);
    else console.log(`Successfully connected to PORT ${PORT}`);
})

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log(`DB Error : ${err.message}`);
    });

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());