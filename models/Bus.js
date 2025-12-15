import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Bus", busSchema);
