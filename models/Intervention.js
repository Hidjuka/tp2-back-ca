const mongoose = require('mongoose');

const interventionSchema = mongoose.Schema({
  motif: { type: String, required: true},
  date: { type: String, required: true },
  lieu: { type: String, required: false }
});

interventionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Agent', interventionSchema);