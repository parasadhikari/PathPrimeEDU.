const express = require("express");

const router = express.Router();

const {
    createAdmission,
    getAdmissions,
    getAdmissionCount
} = require("../controllers/admissionController");

router.post(
    "/create",
    createAdmission
);

router.get(
    "/all",
    getAdmissions
);
router.get(
    "/count",
    getAdmissionCount
);

module.exports = router;