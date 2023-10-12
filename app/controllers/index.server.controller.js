// index.server.controller.js
// Student Name: Sagar Parmar
// Student ID: 301271932
// Date: 11th Oct 2023 


exports.getHomePage = (req, res) => {
    res.render('index', {
        title: 'Home'
    })
};

exports.getProjectsPage = (req, res) => {
    res.render('projects', {
        title: 'Hello World'
    })
};

exports.getServicesPage = (req, res) => {
    res.render('services', {
        title: 'Hello World'
    })
};

exports.getAboutMePage = (req, res) => {
    res.render('about', {
        title: 'Hello World'
    })
};

exports.getContactMePage = (req, res) => {
    res.render('contact', {
        title: 'Hello World'
    })
};

exports.postContactMePage = (req, res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let phone = req.body.phone;
    let email = req.body.email;
    let msg = req.body.msg


    console.log(`First Name: ${fname} \n Last Name: ${lname} \n Phone Number: ${phone} \n Email: ${email} \n msg: ${msg}`)

    res.redirect('/contact-Me')
};