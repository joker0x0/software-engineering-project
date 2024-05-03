const express = require('express')
const app = express()
const mongoose = require('mongoose');
const router = require("./routes/authRouter")
const productRouter = require("./routes/productRouter")

require('dotenv').config()

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.json());

app.use("/api/v2",router)
app.use("/api/v2",productRouter)


mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('DB Connected')
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
})