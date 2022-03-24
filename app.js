const express = require('express')
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv')
var cors = require('cors')

dotenv.config({
  path: './.env'
})

const dbURI = "mongodb+srv://test:test@cluster0.zwqfa.mongodb.net/database_test?retryWrites=true&w=majority";
app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.use('/api/test', require('./routes/index'));





mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000, () => {
    console.log('mongodb is connected')
    console.log("Up Server : http://localhost:3000")
    }) )
  .catch(err => {
    console.log("mondb not connected");
    console.log(err)
  });