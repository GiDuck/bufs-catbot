const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Array, required: true },
  isTerminal: { type: Boolean, required: false }
}, { collection: "catDB"} );

const Department = mongoose.model("Department", departmentSchema);

export default Department;
