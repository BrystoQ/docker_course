const mongoose = require("mongoose");

const MessageText = mongoose.model("MessageText", {
  text: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = { MessageText };
