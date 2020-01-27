const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Array, required: true },
  isTerminal: { type: Boolean, required: false }
}, { collection: "catDB"} );

const Info = mongoose.model("Info", InfoSchema);

export default Info;
