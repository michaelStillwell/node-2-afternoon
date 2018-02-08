require('dotenv').config();
const 
    express  = require('express'),
    app      = express(),
    { json } = require('body-parser'),
    cors     = require('cors'),
    massive  = require('massive'),
    port     = process.env.PORT || 3000;
// Controllers
const 
    { create, getOne, getAll, update, destroy } = require('./controllers/products_controller');

massive(process.env.CONNECT_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(console.log);

app.use( cors() );
app.use( json() );

app.get('/api/products', getAll);
app.get('/api/product/:id', getOne);
app.put('/api/product/:id', update);
app.post('/api/product', create);
app.delete('/api/product/:id', destroy);

app.listen(port, () => console.log(`You're listening to port ${port} radio!`));