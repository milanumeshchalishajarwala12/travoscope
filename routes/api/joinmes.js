const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const JoinMe = require("../../models/JoinMe");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

/// @route POST api/joinme
// @desc Register a user for trip
// @access Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { firstname, lastname, email } = req.body;
  try {
    //See if the user exists

    let joinme = await JoinMe.findOne({ email });
    if (joinme) {
      res.status(400).json({ msg: "You are already on the list" });
    }
    joinme = new JoinMe({
      firstname,
      lastname,
      email
    });
    await joinme.save();
    res.status(200).json({ msg: "You have successfully signed up" });
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route GET api/joinme
// @desc Get list of all tripsuers
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const joinmes = await JoinMe.find().sort({ firstname: -1 });
    res.json(joinmes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
