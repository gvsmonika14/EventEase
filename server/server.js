const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check if .env is loading
console.log("MONGO_URI:", process.env.MONGO_URI);

// Routes
const rsvpRoutes = require("./routes/rsvp");
const adminRoutes = require("./routes/admin");

app.use("/api/rsvp", rsvpRoutes);
app.use("/api/admin", adminRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
  });