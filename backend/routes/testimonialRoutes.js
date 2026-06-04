const express = require("express");

const router = express.Router();


const {
    createTestimonial,
    getTestimonials,
    updateTestimonialStatus,
    getAllTestimonials
} = require("../controllers/testimonialController");

router.post(
    "/create",
    createTestimonial
);

router.get(
    "/all",
    getTestimonials
);


router.put(
    "/status/:id",
    updateTestimonialStatus
);

router.get(
    "/admin",
    getAllTestimonials
);
module.exports = router;