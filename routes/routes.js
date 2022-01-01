const express = require('express');
const controllers =require('../controllers/functions');



const route = express.Router();

route.get('/',(req,res)=>{
    res.render('index');

});

  
route.get('/SignUp',(req,res)=>{
    res.render('SignUp');
});




route.get('/MangeSellers',(req,res)=>{
    res.render('MangeSellers');
});




route.get('/admin',(req,res)=>{
    res.render("Admin");
});


//Api
route.post('/users',controllers.create);


module.exports= route;