const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get pending users
router.get("/pending-users", async (req, res) => {

   const users = await User.find()
.sort({ createdAt: -1 });

    res.json(users);
});

// Approve user
router.put("/status/:id", async (req, res) => {

    const { status } = req.body;

    await User.findByIdAndUpdate(
        req.params.id,
        { status }
    );

    res.json({
        message: "Status Updated"
    });

});

module.exports = router;