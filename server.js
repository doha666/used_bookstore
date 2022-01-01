//varibales 
const express = require("express");
const mongoose = require("mongoose");
require('./model/bookstore');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const cors = require('cors');
const bodyParser= require('body-parser');
const req = require("express/lib/request");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
const PostRoutes = require('./routes/routes');






//Import here





//set view engine
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));








//load asets 

app.use(express.static('views'));
//load routes
app.use('/',require('./routes/routes'));




//log requests



//parse request to bodybarser
app.use(bodyParser.urlencoded({extended:true}))




//Database connection 
mongoose.connect (
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

         
app.listen(process.env.PORT, () => {
  console.log("Server is running at port 3000");
});



  

/*app.use('/', stores);
app.use('/adduser', stores);
app.use('/deleteuser' , stores);
app.use('/updateuser' , stores);*/
    
//app.get('/' , (req,res) =>{
//res.sendFile(__dirname + '/website/index.ejs')});