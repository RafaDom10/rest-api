const express = require('express');

const app = express();

app.use((request, response) => {
  response.status(200).send({
    mensagem: 'Ok, its working',
  });
});

module.exports = app;
