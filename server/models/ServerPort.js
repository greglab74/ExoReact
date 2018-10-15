// ServerPort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  name: {
    type: String
  },
  port: {
    type: Number
  }
,
test: {
  type: Number
},
titre: {
  type: String
},
description: {
  type: Number
}
,
createur: {
type: Number
}
{
  collection: 'servers'
});

module.exports = mongoose.model('ServerPort', ServerPort);
