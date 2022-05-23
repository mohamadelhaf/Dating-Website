const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDB = require('./config/db');
const passport = require('passport');
const router = express.Router();
const User = require('./models/User');
const ContactedUs = require('./models/ContactedUs');


//Load config for global vairables
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

//get data sent from textfield
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
};

//Handlebars
app.engine('.ejs', exphbs.engine({ defaultLayout: 'HomePage.ejs', extname: '.ejs' }));
app.set('view engine', '.ejs');

//Sessions
// app.use(
//     session({
//         secret: 'keyboard cat',
//         resave: false, //do not save the session if nothing is modified
//         saveUninitialized: false, //do not create a session until something is stored
//         //to leave the session open in case we refresh and not to log us out
//         store: new MongoStore ({ mongooseConnection: mongoose.connection})
//     })
// );
//static folder

//database


var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))

//singup
app.post("/sign_up", (req, res) => {
    var Name = req.body.name;
    var Email = req.body.email;
    var Password = req.body.password;
    var Age = req.body.Age;
    var PhoneNumber = req.body.PhoneNumber;
    var Gender = req.body.Gender;

    var data = {
        "Name": Name,
        "Email": Email,
        "Password": Password,
        "Age": Age,
        "PhoneNumber": PhoneNumber,
        "Gender": Gender
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/Login')
})

//login
app.post("/log-in", async (req, res) => {
    try{

        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({Email:email})
        
        if(user.password == password){
            res.redirect("/Profiles");
        }else{
            res.send("Invalid Login details")
        }

    }catch (error){
        res.status(400).send("Invalid Email")
    }
})


app.post("/Contact-Us",  async (req, res) => {
    var Name = req.body.name;
    var Email = req.body.email;
    var phone = req.body.phone;
    var message=req.body.message

    var data = {
        "Name": Name,
        "Email": Email,
        "Phone": phone,
        "message": message,
        
    }

    db.collection('ContactedUs').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/')
})


app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'));
// app.use('/CreateUser', require('./routes/CreateUser'));
// app.use('/', require('./routes/user'));

const PORT = process.env.PORT || 3000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


