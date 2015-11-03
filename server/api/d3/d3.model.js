'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//d3: _id, links, nodes
var D3Schema = new Schema({
  links: Array,
  nodes: Array
});

module.exports = mongoose.model('D3', D3Schema);
