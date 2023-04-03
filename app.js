const http = require('http');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const connectToMongoDb = require('./Util/database');
const crt = require('./Controllers/create').createUser;


const app = express();



app.use(bodyParser.urlencoded({extended:false}));
const server = http.createServer(app);

app.use(bodyParser.json());

//const getDb = require('./Util/database').default;

const errorcontrol = require('./Controllers/404');


const routes = require('./routes/admin');
//const mongoConnect = require('./Util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');






//app.use(errorcontrol.get404);
//app.use('/', routes);

//connectToMongoDb(() => {
  //  app.listen(3000);
//});



//getDb(() => {
    //app.listen(3000);
//});


//module.exports = server;