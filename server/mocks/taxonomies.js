module.exports = function(app) {
  var express = require('express');
  var taxonomiesRouter = express.Router();

  taxonomiesRouter.get('/', function(req, res) {
    res.send({
      'taxonomies': [
        {
          "id":"7ed8d143-e113-40f9-ad9b-a80972873356",
          "name":"Amazon1",
          "dateCreated":"2015-02-10T20:23:09Z"
        },{
          "id":"750763b9-cf2a-42ad-82d0-c725c0a41f24",
          "name":"Amazon2",
          "dateCreated":"2015-02-10T19:56:07Z"
        },{
          "id":"d9bda465-ffbb-4fa8-ad03-758e554443e9",
          "name":"Amazon3",
          "dateCreated":"2015-02-10T20:23:04Z"
        }]
    });
  });

  taxonomiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  taxonomiesRouter.get('/:id', function(req, res) {
    res.send({
      'taxonomies': {
        id: req.params.id
      }
    });
  });

  taxonomiesRouter.put('/:id', function(req, res) {
    res.send({
      'taxonomies': {
        id: req.params.id
      }
    });
  });

  taxonomiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/taxonomies', taxonomiesRouter);
};
