var mongoose = require('mongoose');

var WebsitesSchema = new mongoose.Schema({
  title: String,
  description: String,
  created_at: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Websites', WebsitesSchema);