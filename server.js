// server.js
// Student Name: Sagar Parmar
// Student ID: 301271932
// Date: 11th Oct 2023 

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
