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
router.put("/approve/:id", async (req, res) => {

    await User.findByIdAndUpdate(
        req.params.id,
        { approved: true }
    );

    res.json({ message: "Approved" });

});

router.put("/reject/:id", async (req, res) => {

    await User.findByIdAndUpdate(
        req.params.id,
        { approved: false }
    );

    res.json({ message: "Rejected" });

});
module.exports = router;