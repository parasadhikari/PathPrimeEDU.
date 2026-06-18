const express = require("express");

const router = express.Router();

const Fee = require("../models/Fee");

router.get("/test", (req, res) => {
    res.json({
        message: "Fee route working"
    });
});

router.post("/add", async (req, res) => {

    try {

        console.log("Received:", req.body);

        const fee = await Fee.create(req.body);

        console.log("Saved:", fee);

        res.json(fee);

    } catch (error) {

        console.log("ERROR:", error);

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



router.put(
    "/month/:id",
    async (req, res) => {

        const {
            month,
            status
        } = req.body;

        const student =
            await Fee.findById(
                req.params.id
            );

        student.monthlyStatus[
            month
        ] = status;

        await student.save();

        res.json(student);
    }
);
module.exports = router;