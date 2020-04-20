const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.post('/projects', (request, response) => {
  const body = request.body; 

  return response.json(body);
});

app.put('/projects/:id', (request, response) => {

});

app.delete('/projects/:id', (request, response) => {

});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});