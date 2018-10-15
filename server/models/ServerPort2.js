// ServerPort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort2 = new Schema({

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
}, {
  collection: 'servers'
});

module.exports = mongoose.model('ServerPort2', ServerPort2);
