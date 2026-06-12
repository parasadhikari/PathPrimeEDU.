const Note = require("../models/Note");


// Upload Note
exports.uploadNote = async (req, res) => {

    try {

        console.log(req.body);

        const {
            title,
            subject,
            className,
            type
        } = req.body;

        const pdf = req.file.path;

        const note = await Note.create({

            title,
            subject,
            className,
            pdf,
            type: type || "note"

        });

        res.status(201).json({
            message: "Note Uploaded Successfully",
            note
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
};


// Get All Notes
exports.getNotes = async (req, res) => {

    try {

        const notes = await Note.find({
            type: "note"
        });

        res.status(200).json(notes);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
};

// Get PYQs
exports.getPyqs = async (req, res) => {

    try {

        const pyqs = await Note.find({
            type: "pyq"
        });

        res.status(200).json(pyqs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};