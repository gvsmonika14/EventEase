const express = require("express");
const router = express.Router();

const RSVP = require("../models/RSVP");

// Save RSVP
router.post("/", async (req, res) => {
  try {
    const rsvp = new RSVP(req.body);

    await rsvp.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get all RSVPs
router.get("/", async (req, res) => {
  try {
    const data = await RSVP.find();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;