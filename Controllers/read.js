const express = require('express');

const http = require('http');

const path = require('path');

const db = require('../Util/database');

const router = express.Router();

const Promise = require('promise');

const User = require('../Models/category').User;

async function readUsers() {
    try {
      const users = await User.find({});
      console.log('All users:', users);
      return users;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  exports.readUsers = readUsers;

