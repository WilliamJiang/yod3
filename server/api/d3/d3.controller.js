'use strict';

var _ = require('lodash');
var D3 = require('./d3.model');

// Get list of d3s
exports.index = function(req, res) {
  D3.find(function (err, d3s) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(d3s);
  });
};

// Get a single d3
exports.show = function(req, res) {
  D3.findById(req.params.id, function (err, d3) {
    if(err) { return handleError(res, err); }
    if(!d3) { return res.status(404).send('Not Found'); }
    return res.json(d3);
  });
};

// Creates a new d3 in the DB.
exports.create = function(req, res) {
  D3.create(req.body, function(err, d3) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(d3);
  });
};

// Updates an existing d3 in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  D3.findById(req.params.id, function (err, d3) {
    if (err) { return handleError(res, err); }
    if(!d3) { return res.status(404).send('Not Found'); }
    var updated = _.merge(d3, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(d3);
    });
  });
};

// Deletes a d3 from the DB.
exports.destroy = function(req, res) {
  D3.findById(req.params.id, function (err, d3) {
    if(err) { return handleError(res, err); }
    if(!d3) { return res.status(404).send('Not Found'); }
    d3.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}