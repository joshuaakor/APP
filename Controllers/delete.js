const express = require('express');


const http = require('http');

const path = require('path');

const db = require('../Util/database');

const router = express.Router();

const Promise = require('promise');

const User = require('../Models/category').User;

async function deleteUserByname(name) {
    try {
      const result = await User.deleteOne({ name: name });
      console.log('User deleted');
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  exports.deleteUserByname = deleteUserByname;
  


