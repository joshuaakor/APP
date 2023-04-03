const http = require('http');

const express = require('express')

const path = require('path');

const db = require('../Util/database');

const router = express.Router();

router.get404 = ((req, res, next ) => {
    res.status(404).render('404', {pageTitle:'Pages Not Found'})
});

module.exports = router;