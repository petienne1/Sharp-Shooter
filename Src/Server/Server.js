// Create a simple Web API Server that accepts HTTP requests on the root path
// and responds with the string 'Hello World'

// require the Express library and assign it to express variable
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const statsRouter = require('./router/stats-router');

// create an application instance and assign it to app variable
const app = express();

// MiddleWare
// body parser makes it possible to post JSON to the Server
// we can access data we post using 'request.body'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static file serve
// express.static will serve everything within client as a static resource
// it will serve the index.html on the root of that directory on a GET to '/'
app.use(express.static(path.join(__dirname, '../Client')));
// /App/index.jsx
app.use('/stats', statsRouter);
// API

// Routes - creates a route that accepts HTTP get requests
// on GET request to the URL, run function
app.get('/', (request, response) => {
  console.log('get request made to test');
  response.send('Helloooooooo');
});

app.listen(8080, () => {
  console.log('Listening on port 8080...');
});
