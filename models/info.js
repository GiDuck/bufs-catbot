const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Array, required: true },
  isTerminal: { type: Boolean, required: false }
}, { collection: "catDb"} );

const Info = mongoose.model("Info", InfoSchema);

module.exports =  ({ Info });
