import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true
  },
  passengerName: {
    type: String,
    required: true
  },
  seatsBooked: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Booking", bookingSchema);
