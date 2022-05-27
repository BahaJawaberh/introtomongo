const express = require('express');
const { app } = require("./index");

app.use(express.json());
const items = [];
app.get('/getItems', (erq, res) => res.send(items));
app.get('/addNewItem', function (req, res) {
    const item = req.body;
    items.push(item);

    res.send('item recieved');
});
