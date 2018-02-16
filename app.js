// Vimmi Swami
//using Express NodeJS
'use strict';
const express = require('express')
const app = express()
const path = require('path')
app.listen(3000)


function redirect(req, res, next) {
    res.sendPage = function(view) {
        return res.sendFile(__dirname + "/src/" + view);
    }
    next();
}

app.use(redirect)
// Get / as home page
app.get('/',
    function(req, res) {
        res.sendPage("home.html")
    });