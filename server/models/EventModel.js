const { Schema, model } = require("mongoose");
const Restaurant = require("./RestaurantModel");
//const dateFormat = require("../utils/dateFormat");
//const User = require("./User");

const eventSchema = new Schema(
  {
    /* _id: {
      type: String,
    }, */
    title: {
      type: String,
    },
    note: {
      type: String,
    },
    restaurants: [Restaurant],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//const Event = model("Event", eventSchema);
const Event = model("Event", eventSchema);

module.exports = Event;
