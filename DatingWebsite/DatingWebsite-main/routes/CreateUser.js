// const express = require('express');
// const passport = require('passport');
// const router = express.Router();
// const mongoose = require('mongoose');
// const User = require('../models/User');

// var db = mongoose.connection

// router.post('/sign-up', (req, res)=>{
//     var Name = req.body.name;
//     var Email = req.body.email;
//     var Password = req.body.password;
//     var Age = req.body.Age;
//     var PhoneNumber = req.body.PhoneNumber;
//     var Gender = req.body.Gender;

//     var user = {
//         "Name": Name,
//         "Email": Email,
//         "Password": Password,
//         "Age": Age,
//         "PhoneNumber": PhoneNumber,
//         "Gender": Gender
//     }

//     db.collection('users').insertOne(user,(err,collection)=>{
//         if(err) throw err;
//         console.log("User inserted successfully.")
//     })
//     return res.redirect('/Login-Register')
// })


module.exports = router;