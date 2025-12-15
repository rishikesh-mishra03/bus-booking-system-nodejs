import express from "express";
import Bus from "../models/Bus.js";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/:busId/book", async (req, res) => {
  const { passengerName, seatsBooked } = req.body;

  const bus = await Bus.findById(req.params.busId);

  if (!bus || bus.seats < seatsBooked) {
    return res.status(400).json({ message: "Seats not available" });
  }

  bus.seats -= seatsBooked;
  await bus.save();

  const booking = await Booking.create({
    busId: bus._id,
    passengerName,
    seatsBooked
  });

  res.status(201).json(booking);
});

export default router;
