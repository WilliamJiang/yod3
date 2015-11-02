'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var D3Schema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('D3', D3Schema);