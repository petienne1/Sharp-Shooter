// Create a simple Web API Server that accepts HTTP requests on the root path
// and responds with the string 'Hello World'

// require the Express library and assign it to express variable
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// create an application instance and assign it to app variable
const app = express();

// MiddleWare
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Static file serve
app.use(express.static(path.join(__dirname, '../client')));

// Routes - creates a route that accepts HTTP get requests
app.get('/', function(request, response) {
  console.log('get request made to test');
  response.send('Helloooooooo');
});

app.listen(3030, () => {
  console.log('Listening on port 3030');
});
