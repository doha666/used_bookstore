/*exports.getStores= (req, res, next) =>{


res.send('hello')


 };

 const store= require('../model/bookstore');

 exports.getStores= (req, res, next) =>{
try{

const store= await store.find();

return res.status(200).json({

success:true,
count:store.length,
data:store




});


}catch(err){

console.error(err);
res.status(500).json({error:'server error'});



};








 };
 exports.addStore= async(req, res, next)=>{

try{
const store= awaite .create(req.body);

return res.status(200).json({
success:true,
data:store


})


}catch(err){
console.error(err);
res.status(500).json({error:'server error'});


}





 };*/