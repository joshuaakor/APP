const express = require('express');

app.use('/', (req, res, next) => {
    res.send('<form action="/add-product" method="POST"><button type"submit">Continue</button></form>');
});
