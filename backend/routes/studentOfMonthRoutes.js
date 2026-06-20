const express = require("express");
const router = express.Router();

const StudentOfMonth =
require("../models/StudentOfMonth");

router.post("/", async (req, res) => {

    try {

        const student =
            await StudentOfMonth.create(
                req.body
            );

        res.json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.get("/", async (req, res) => {

    try {

        const students =
            await StudentOfMonth.find()
                .sort({ createdAt: -1 });

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.delete("/:id", async (req, res) => {

    try {

        await StudentOfMonth.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;