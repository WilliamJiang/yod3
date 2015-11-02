/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var D3 = require('./d3.model');

exports.register = function(socket) {
  D3.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  D3.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('d3:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('d3:remove', doc);
}