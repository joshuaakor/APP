const express = require('express');

const MongoClient = require('mongodb').MongoClient;

const CreateCsvWriter = require('csv-writer').createObjectCsvWriter;

const stream = require('stream');

const User = require('../Models/category').User;

const json2csv = require('json2csv').parse;
const fs = require('fs');

// Retrieve all users from the database
User.find({}, function(err, users) {
  if (err) {
    console.error(err);
  } else {
    // Convert users to CSV format
    const csvData = json2csv(users, { fields: ['name', 'quantity', 'unit', 'category'] });

    // Write CSV data to a file
    fs.writeFile('users.csv', csvData, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Users data downloaded as CSV file');
      }
    });
  }
});




