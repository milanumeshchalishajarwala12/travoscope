const mongoose = require("mongoose");

const JoinMeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = JoinMe = mongoose.model("joinme", JoinMeSchema);
