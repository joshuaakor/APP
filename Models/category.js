const { application } = require('express');

const { MongoDBNamespace, MongoCursorInUseError } = require('mongodb');

const getDb = require('../Util/database');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  groups: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('Products', userSchema);

exports.User = User;





//const userSchema = new mongoose.Schema({
  //name: String,
  //quantity: String,
  //unit: String,
  //groups: String,
//});

//const User = mongoose.model('Products', userSchema);


module.exports = {User};











//class shoplist{
  //  constructor(id, name, quantity, unit, category) {
    //    this.id = id;
      //  this.name = name;
        //this.quantity = quantity;
        //this.unit = unit;
        //this.category = category;
    
    //}     
    //static create(){
      //  const db = getDb();
      
        //return db.collection('Products').insertOne(this).then(result => {
          //  console.log(result);
        //}).catch(err => {
          //  console.log(err);
        //});    
    //}

   //static read(){
     //   const db = getDb();
       
       // return db.collection('Products').find().toArray().then(Products => {
         //   console.log(Products);
           // return Products;
        //}).catch(err => {
          //  console.log(err);
        //});
   // }

   //static update(){
     //   const db = getDb();
       // let dbOp;
        //if (this.id) {
          //  dbOp = db.collection('Products').updateOne({category_id: new mongodb.ObjectId(this.id)}, {$set:this});
        //} else {
          // dbOp = db.collection('Products').insertOne(this); 
        //}
        //return dbOp.then(result => {
          //  console.log(result);
        //}).catch(err => {
          //  console.log(err);
        //});
    //}

    //static deletebyID(prodId){
      //  const db = getDb();

        //return db.collection('Products')
        //.deleteOne({id: new ObjectId(prodId)})
        //.then((result) => {
          //  console.log(' Product Deleted!');
        //})
        //.catch(err => {
          //  console.log(err);
        //});
    //}
//}; 



//module.exports = shoplist; 