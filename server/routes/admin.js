
const express = require("express");
const router = express.Router();
console.log("Admin email loaded:", process.env.ADMIN_EMAIL);
console.log("Admin password loaded:", Boolean(process.env.ADMIN_PASSWORD));

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({
      success: true,
      message: "Login successful",
      token: "eventease-admin-token",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

module.exports = router;