const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
//const Restaurant = require("./Restaurant");
const eventSchema = require("./EventSchema");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    events: [eventSchema],
    /* // set to be an array of data that adheres to the bookSchema
    savedEvent: [Restaurant],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    event: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],*/
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
/* 
// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual("eventCount").get(function () {
  return this.savedRestaurant.length;
}); */

const User = model("User", userSchema);

module.exports = User;
