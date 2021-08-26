const { Router } = require('express');

const router = Router();

router.get('/', (request, response, next) => {
  response.status(200).send({
    message: 'Using GET method inside products route',
  });
});

router.post('/', (request, response, next) => {
  response.status(201).send({
    message: 'Using POST method inside products route',
  });
});

router.get('/:id_product', (request, response, next) => {
  const id = request.params.id_product;

  if (id === 'especial') {
    response.status(200).send({
      message: 'You discovery an special id!!',
      id,
    });
  } else {
    response.status(200).send({
      message: 'You pass an id',
      id,
    });
  }
});

router.patch('/', (request, response, next) => {
  response.status(201).send({
    message: 'Using PATCH method inside products route',
  });
});

router.delete('/', (request, response, next) => {
  response.status(201).send({
    message: 'Using DELETE method inside products route',
  });
});

module.exports = router;
