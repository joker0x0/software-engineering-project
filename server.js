const express = require('express')
const app = express()
const mongoose = require('mongoose');
const router = require("./routes/authRouter")
const productRouter = require("./routes/productRouter")
const cartRouter = require('./routes/cartRouter')

require('dotenv').config()

// set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.json());

app.use("/api/v2",router)
app.use("/api/v2",productRouter)
app.use("/api/v2", cartRouter)


// index page
app.get('/', (req, res)=> {
  res.render('pages/index');
});

// signUp page
app.get('/signup', (req, res)=> {
  res.render('pages/signUp');
});

// login page
app.get('/login', (req, res)=> {
  res.render('pages/login');
});
// connect to database 

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('DB Connected')
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
})