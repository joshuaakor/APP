const express = require('express');

const http = require('http');

const path = require('path');

const db = require('../Util/database');

const router = express.Router();

const Promise = require('promise');

const User = require('../Models/category').User;


async function updateUser(id, updates) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    console.log('User updated in database.');
    return updatedUser;
  } catch (err) {
    console.log(err);
    return null;
  }
}

exports.updateUser = updateUser;

  




//async function createUser(user, id = null) {
  //try {
    //let createdUser;

    //if (id) {
      //createdUser = await User.findByIdAndUpdate(id, user, { new: true });
    //} else {
      //createdUser = await User.create(user);
    //}

    //return createdUser;
  //} catch (error) {
    //console.error(error);
    //throw new Error('Error creating user');
  //}
//}


