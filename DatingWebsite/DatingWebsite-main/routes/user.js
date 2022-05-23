// const express = require('express');
// const { Mongoose } = require('mongoose');
// const router = express.Router();
// const { ensureAuth } = require('../middleware/auth')
// const Reviews = require('../models/Reviews')

// router.get('/reviews', ensureAuth, (req, res) => {
//     res.render('reviews', {
//         layout: 'reviews',
//         name: req.user.displayName,
//     })
// });

// router.post('/', ensureAuth, async (req, res) => {
//     try{
//             const newReview = {
//             user: req.user.displayName,
//             Review: req.body,
//             Rating: req.rating,
//             showName: req.showname,
//             }
//             await Reviews.create(newReview)
//             res.redirect('/')
            
//     }catch (err){
//         console.error(err)
//         res.render('error/505')
//     }
// });

// module.exports = router;