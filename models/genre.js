var mongoose = require('mongoose');

// Define a Schema
var Schema = mongoose.Schema;

// Create a new Schema instance
var GenreSchema = new Schema(
  {
    name: { type: String, min: 3, max: 100, required: true }
  }
);

// Virtual for GenreSchema's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
