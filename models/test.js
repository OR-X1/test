const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: null
  },
  
}, { timestamps: true });

const Test = mongoose.model('test', testSchema);
module.exports = Test;