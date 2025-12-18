import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import busRoutes from "./routes/busRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/buses", busRoutes);
app.use("/api/bookings", bookingRoutes);

// ✅ ADD THIS HEALTH CHECK
app.get("/", (req, res) => {
  res.send("Bus Booking API is running 🚍");
});

const PORT = process.env.PORT || 3000;

// ✅ CONNECT DB BEFORE LISTEN
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error("MongoDB connection failed", err);
});
