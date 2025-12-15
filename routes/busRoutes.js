import express from "express";
import Bus from "../models/Bus.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const bus = await Bus.create(req.body);
  res.status(201).json(bus);
});

router.get("/", async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
});

export default router;
