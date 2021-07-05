const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  restaurantId: {
    type: String,
    required: true,
  },
  key: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
  address1: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

// creating model
const Restaurant = model("Restaurant", restaurantSchema);

module.export = Restaurant;