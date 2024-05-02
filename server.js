const express = require('express')
const app = express()
const mongoose = require('mongoose');

require('dotenv').config()

app.use(express.static('public'));
app.use(express.json());


mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('DB Connected')
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
  })
  .catch((err) => console.log(err));