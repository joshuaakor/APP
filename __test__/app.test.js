const { testElement } = require('domutils');

const http = require('http');

const request = require('supertest');
const routes = require('../routes/admin');
const createTest = require('../app');
const { expect } = require('chai');


const mongoose = require('mongoose');
const User = require('../Models/category').User;
const read = require('../Controllers/read').readUsers;


beforeAll(async () => {

    // Connect to the database before running the tests
    await mongoose.connect(
        'mongodb+srv://joshuaakor21:Joshray57@cluster0.z4irszx.mongodb.net/Shop?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
  });

afterAll(async () => {
     //Disconnect from the database after running the tests
    await mongoose.connection.close();
}, 10000);


describe('ReadUser', () => {
    it('should read all users', async () => {
        const users =  read();
        expect(users.length).to.be.greaterThanOrEqual(0);
      }, 10000);
});



   



















// describe('GET /', () => {
     //   test('should return a 200 OK status code', async () => {
       //     const response = await request(createTest).get('/');
         //   expect(response.statusCode).toBe(200);
        //});
    //});
    
    //describe('POST /create', () => {
      //  test('should create a new product', async () => {
        //    const response = await request(createTest)
          //  .post('/create')
            //.send({id:1, name:'mango', quantity:10, unit:'kg', category:'fruit'});
            
    
           // expect(response.statusCode).toBe(201);
           // expect(response.body.id).toEqual(1);
           // expect(response.body.name).toEqual('mango');
           // expect(response.body.quantity).toEqual(10);
            //expect(response.body.unit).toEqual('kg');
            //expect(response.body.category).toEqual('fruit');
        //});
    //});
  
  

