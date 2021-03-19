const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  displayName: {type: String},
});

module.export = user = mongoose.model("user", userSchema);