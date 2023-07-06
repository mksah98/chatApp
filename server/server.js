const express = require('express');
const dotenv = require('dotenv');

const { chats } = require('./data');

dotenv.config();
const app = express();

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("app is running");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const chat = chats.find(c => c._id === req.params.id);
    res.send(chat);
});

app.listen(port, console.log(`server started on ${port}`));
