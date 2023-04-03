const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://joshuaakor21:Joshray57@cluster0.z4irszx.mongodb.net/Shop?retryWrites=true&w=majority', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database.');
});

module.exports = db;



















//const mongodb = require('mongodb').MongoClient;

//const url = 'mongodb+srv://joshuaakor21:Joshray57@cluster0.z4irszx.mongodb.net/Shop?retryWrites=true&w=majority';

//mongodb.connect(url, function(err,client) {
  //  const db = client.db('Shop');

    //const getDb = () => {
      //  if(db){
        //    return db;
        //}
      //  throw 'No Database Found ';
    //};
  //  return getDb;
//});



//const getDb = () => {
    //if(db){
      //  return db;
    //}
    //throw 'No Database Found ';
//};

//const closeDataBaseConnection = () => {
  //  db.close(() => {
    //    console.log('Connection Closed');
    //});
//};


//process.on('SIGINT', () => {
  //  console.log('SIGINT signal received: closing database connection');
    //closeDataBaseConnection();
    //process.exit(0);
//});


//exports.mongodb = mongodb;
//exports.getDb = getDb;
//exports.closeDataBaseConnection = closeDataBaseConnection;

