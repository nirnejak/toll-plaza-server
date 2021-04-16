const mongoose = require("mongoose")

const tollSchema = mongoose.Schema(
  {
    amount: { type: Number },
    vehicleRegistrationNumber: { type: String },
  },
  { timestamps: true }
)

const Toll = mongoose.model("User", tollSchema)

module.exports = Toll
