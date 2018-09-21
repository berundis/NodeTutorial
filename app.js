const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orederRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orederRoutes);

module.exports = app;