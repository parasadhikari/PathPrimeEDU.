const express = require("express");

const router = express.Router();

const Fee = require("../models/Fee");

router.post("/add", async (req, res) => {

    try {

        const fee = await Fee.create(req.body);

        res.json(fee);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.get("/", async (req, res) => {

    const students =
        await Fee.find()
            .sort({ createdAt: -1 });

    res.json(students);

});

router.put("/pay/:id", async (req, res) => {

    const { amount, month } = req.body;

    const student =
        await Fee.findById(req.params.id);

    student.totalPaid += Number(amount);

    student.paymentHistory.push({
        amount,
        month
    });

    const totalFee =
        student.monthlyFee;

    student.pendingAmount =
        Math.max(
            0,
            totalFee - student.totalPaid
        );

    student.status =
        student.pendingAmount === 0
            ? "Paid"
            : "Partial";

    await student.save();

    res.json(student);

});
module.exports = router;