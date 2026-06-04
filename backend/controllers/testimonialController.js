const Testimonial = require("../models/Testimonial");

exports.createTestimonial = async (req, res) => {

    try {

        const {

            name,
            email,
            rating,
            review

        } = req.body;

        const testimonial =
            await Testimonial.create({

                name,
                email,
                rating,
                review

            });

        res.status(201).json({
            message: "Review Submitted",
            testimonial
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.getTestimonials = async (req, res) => {

    try {

        const testimonials =
            await Testimonial.find({
                status: "Approved"
            });

        res.status(200).json(
            testimonials
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.updateTestimonialStatus = async (req, res) => {

    try {

        const { id } = req.params;

        const { status } = req.body;

        const testimonial =
            await Testimonial.findByIdAndUpdate(

                id,

                { status },

                { new: true }

            );

        res.status(200).json(
            testimonial
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.getAllTestimonials = async (req, res) => {

    try {

        const testimonials =
            await Testimonial.find()
                .sort({ createdAt: -1 });

        res.status(200).json(
            testimonials
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
