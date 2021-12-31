
const express = require("express");
const mongoose = require("mongoose");
require('./model/bookstore');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

const routes = require('./routes/routes');

mongoose.connect(
 process.env.MONGO_URI,
  {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

         

app.get('/' , (req,res) =>{
res.sendFile(__dirname + '/public/home.html')

})
app.use(express.static('public'));
app.listen(process.env.PORT, () => {
  console.log("Server is running at port 5000");
});

/*app.use('/', stores);
app.use('/adduser', stores);
app.use('/deleteuser' , stores);
app.use('/updateuser' , stores);*/
