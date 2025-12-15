import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import busRoutes from "./routes/busRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/buses", busRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
