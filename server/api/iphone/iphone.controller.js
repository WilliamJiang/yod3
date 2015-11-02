'use strict';

var _ = require('lodash');
var Iphone = require('./iphone.model');

// Get list of iphones
exports.index = function(req, res) {
  Iphone.find(function (err, iphones) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(iphones);
  });
};

// Get a single iphone
exports.show = function(req, res) {
  Iphone.findById(req.params.id, function (err, iphone) {
    if(err) { return handleError(res, err); }
    if(!iphone) { return res.status(404).send('Not Found'); }
    return res.json(iphone);
  });
};

// Creates a new iphone in the DB.
exports.create = function(req, res) {
  Iphone.create(req.body, function(err, iphone) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(iphone);
  });
};

// Updates an existing iphone in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Iphone.findById(req.params.id, function (err, iphone) {
    if (err) { return handleError(res, err); }
    if(!iphone) { return res.status(404).send('Not Found'); }
    var updated = _.merge(iphone, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(iphone);
    });
  });
};

// Deletes a iphone from the DB.
exports.destroy = function(req, res) {
  Iphone.findById(req.params.id, function (err, iphone) {
    if(err) { return handleError(res, err); }
    if(!iphone) { return res.status(404).send('Not Found'); }
    iphone.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}