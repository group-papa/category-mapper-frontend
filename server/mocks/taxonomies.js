module.exports = function(app) {
  var express = require('express');
  var taxonomiesRouter = express.Router();

  taxonomiesRouter.get('/', function(req, res) {
    res.send({
      'taxonomies': []
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
