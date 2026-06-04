
const User = require("../models/User");
const Note = require("../models/Note");
const Testimonial = require("../models/Testimonial");

exports.getStats = async (req, res) => {

    try {

        const students =
            await User.countDocuments();

        const notes =
            await Note.countDocuments({
                type: "note"
            });

        const pyqs =
            await Note.countDocuments({
                type: "pyq"
            });

        const reviews =
            await Testimonial.countDocuments({
                status: "Approved"
            });

        res.json({

            students,
            notes,
            pyqs,
            reviews

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};