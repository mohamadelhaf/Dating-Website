const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/',  (req, res) => {
    res.render('HomePage', {
        layout: 'HomePage'
    })
});
router.get('/Logout',(req,res)=>{
    res.redirect('/');
})

router.get('/About-Us',   (req, res) => {
    res.render('AboutUs', {
        layout: 'AboutUs'
    })
});

router.get('/Contact-Form',   (req, res) =>{
    res.render('ContactForm', {
        layout: 'ContactForm',
        
    })
})

router.get('/posts',  async  (req, res) =>{
     try {
        res.render('posts', {
            name: req.user.Email,
            layout: 'posts',
        })
       } catch (err) {
        console.error(err)
         res.render('error/500')
      }
})

router.get('/chats',   (req, res) =>{
    res.render('chats', {
        layout: 'chats',
    })
})



router.get('/Forgot-Password',  (req, res) =>{
    res.render('forgotPass', {
        layout: 'forgotPass'
    })
})
router.get('/Profiles',   (req, res) =>{
    res.render('Profiles', {
    
        layout: 'Profiles'
    })
})
router.get('/Safety',  (req, res) =>{
    res.render('Safety', {
        layout: 'Safety'
    })
})
router.get('/Safety&Tips',   (req, res) =>{
    res.render('Safety&Tips', {
        layout: 'Safety&Tips'
    })
})
router.get('/Login',   (req, res) =>{
    res.render('LogIn', {
        layout: 'LogIn'
    })
})
router.get('/SignUp',   (req, res) =>{
    res.render('SignUp', {
        layout: 'SignUp'
    })
})
router.get('/Subscription',   (req, res) =>{
    res.render('Subscription', {
        layout: 'Subscription'
    })
})

module.exports = router;