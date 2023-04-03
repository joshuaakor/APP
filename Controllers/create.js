const express = require('express');

const http = require('http');


const path = require('path');

//const getDb = require('../Util/database').getDb;

const Promise = require('promise');

const router = express.Router();

const User = require('../Models/category').User;

async function createUser(user) {
  try {
    const createdUser = await User.create(user);
    console.log('User created:', createdUser);
    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

exports.createUser = createUser;




//async function createUser(name, quantity, unit, groups) {
  //  const user = new User({
    //    name,
      //  quantity,
        //unit,
        //groups
    //});

    //try {
      //  await user.create();
        //console.log('User saved to database.');
      //} catch (err) {
        //console.log(err);
      //}
      //return user;
//};

exports.createUser = createUser;
























//exports.Getcreateproduct = (req, res, next) => {
  //  res.render('crte', {
    //    pageTitle:'Create Product',
      //  activeCreate: true,
      //  path:'/create'});
    //res.status(200);
//};


//exports.Postcreateproduct = (req, res, next) => {
    //const id = req.body.id;
    //const name = req.body.name;
    //const quantity = req.body.quantity;
    //const unit = req.body.unit;
    //const category = req.body.category;
    //const product = new Product(id, name, quantity, unit, category);
    //product.create().then(result => {
      //  console.log('New Product Created!',);
        //res.redirect('/');
    //}).catch(err => {
      //  console.log(err);
    //});

  //  res.status(201);

    
//};




