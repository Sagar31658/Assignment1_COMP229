// index.server.routes.js
// Student Name: Sagar Parmar
// Student ID: 301271932
// Date: 11th Oct 2023 


var express = require('express');
var router = express.Router();

const controller = require('../controllers/index.server.controller')

router.get('/', controller.getHomePage);

router.get('/about-Me', controller.getAboutMePage);

router.get('/projects', controller.getProjectsPage);

router.get('/contact-Me', controller.getContactMePage);

router.get('/services', controller.getServicesPage);

router.post('/submit-contact-me',controller.postContactMePage);

module.exports = router;
