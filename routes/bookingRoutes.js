import express from "express";
import Bus from "../models/Bus.js";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/:busId/book", async (req, res) => {
  try {
    const { busId } = req.params;
    const { passengerName, seatsBooked } = req.body;


    if (!passengerName || !seatsBooked) {
      return res.status(400).json({
        message: "Passenger name and seats are required"
      });
    }

    const bus = await Bus.findById(busId);

    if (!bus) {
      return res.status(404).json({
        message: "Bus not found"
      });
    }

    const seats = Number(seatsBooked);

    if (seats <= 0) {
      return res.status(400).json({
        message: "Seats must be greater than 0"
      });
    }

    if (seats > bus.seats) {
      return res.status(400).json({
        message: "Not enough seats available"
      });
    }

    bus.seats -= seats;
    await bus.save();

    
    const booking = new Booking({
      busId,
      passengerName,
      seatsBooked: seats
    });

    await booking.save();

    res.status(201).json({
      message: "Booking successful",
      booking
    });

  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
});

export default router;
