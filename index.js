// index.js

const express = require('express');

const app = express();

app.use(express.json()); // to parse JSON bodies

app.post('/api/validate', (req, res) => {
  // get card number from req.body

  // validate card number

  // return response 
});

app.listen(4000, () => {
  console.log('Server started on port 4000'); 
});