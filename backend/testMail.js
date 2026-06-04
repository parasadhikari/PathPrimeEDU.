require("dotenv").config();

const nodemailer = require("nodemailer");

async function run() {

    const transporter = nodemailer.createTransport({

        service: "gmail",

        auth: {

            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS

        }

    });

    const result = await transporter.sendMail({

        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,

        subject: "PathPrimeEdu Test Mail",

        text: "If you received this email, Nodemailer is working."

    });

    console.log("SUCCESS");
    console.log(result);
}

run().catch(console.error);