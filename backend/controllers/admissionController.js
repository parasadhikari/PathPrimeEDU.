const Admission = require("../models/Admission");
const { Resend } = require("resend");

const resend = new Resend(
    process.env.RESEND_API_KEY
);

// CREATE ADMISSION

exports.createAdmission = async (req, res) => {

    try {

        const {

            studentName,
            parentName,
            phone,
            email,
            selectedCourse,
            courseType

        } = req.body;


        // SAVE TO DATABASE

        const admission = await Admission.create({

            studentName,
            parentName,
            phone,
            email,
            selectedCourse,
            courseType

        });

        const emailResponse = await resend.emails.send({

            from: "onboarding@resend.dev",

            to: "parasadhikari775@gmail.com",

            subject: "New Admission Inquiry - PathPrimeEdu",

            html: `

        <h2>New Admission Received</h2>

        <p><b>Student Name:</b> ${studentName}</p>

        <p><b>Parent Name:</b> ${parentName}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Selected Course:</b> ${selectedCourse}</p>

        <p><b>Course Type:</b> ${courseType}</p>

    `
        });

        console.log(emailResponse);

        res.status(201).json({

            message: "Admission Submitted Successfully",

            admission

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: error.message

        });
    }
};


exports.getAdmissions = async (req, res) => {

    try {

        const admissions = await Admission.find()
            .sort({ createdAt: -1 });

        res.status(200).json(admissions);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.getAdmissionCount = async (req, res) => {

    try {

        const count = await Admission.countDocuments();

        res.status(200).json({
            count
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};