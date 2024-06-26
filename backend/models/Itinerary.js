const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./Event');
require('./Living');
require('./Transportation');

const eventSchema = mongoose.model('Event').schema
const transportationSchema = mongoose.model('Transportation').schema
const livingSchema = mongoose.model('Living').schema

const itinerarySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    country: {
      type: String,
      required: true
     },
    imageUrls: {
      type: [String],
      // required: false //temporarily commented out for testing
    },
    events:[eventSchema],
    transportations:[transportationSchema],
    livings:[livingSchema],
    likes:{
      type: Number,
      default: 0
    },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Itinerary', itinerarySchema);
