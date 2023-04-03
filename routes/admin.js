const express = require('express');
const router = express.Router();

const create = require('../Controllers/create');

const update = require('../Controllers/update');

const read = require('../Controllers/read');

const delet = require('../Controllers/delete');

const csv = require('../Controllers/csvdownload');

//router.get('/', create.);
//router.post('/create', create.Postcreateproduct);

//router.get('/update', update.Getupdateproduct);
//router.post('/update', update.Postupdateproduct);

//router.get('/read', read.Getreaddocs);

//router.get('/delete', delet.Getdeleteproduct);
//router.post('/delete', delet.Postdeleteproduct);

//router.post('/read', csv.PostCsvDownload);




module.exports = router;




 

