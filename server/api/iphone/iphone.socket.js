/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Iphone = require('./iphone.model');

exports.register = function(socket) {
  Iphone.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Iphone.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('iphone:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('iphone:remove', doc);
}