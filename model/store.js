const mongoose= require('mongoose');

const storeSchema= new mongoose.Schema({
storeID:{
type:String,
required:[true,'please add a store ID'],
unique:true,
trim:true,
maxlength:[10,'store id must be less than 10 char'] 
},

address:{
type:String,
required:[true,'please enter the address']
,},

location:{
type:{
    type:String,
    enum:['point'],},

coordinates:{
type:[Number],
index:'2dsphere'},
},

createdAt:{

type:Date,
default: Date.now,}








});
module.exports= mongoose.model('store',storeSchema);