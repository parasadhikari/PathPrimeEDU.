const Notice = require("../models/Notice");

// CREATE NOTICE

exports.createNotice = async (req, res) => {

    try {

        const notice =
            await Notice.create(req.body);

        res.status(201).json(notice);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// GET ALL NOTICES

exports.getNotices = async (req, res) => {

    try {

        const notices =
            await Notice.find()

                .sort({
                    pinned: -1,
                    createdAt: -1
                });

        res.json(notices);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// LIKE NOTICE

exports.likeNotice = async (req, res) => {

    try {

        const { email } = req.body;

        const notice =
            await Notice.findById(
                req.params.id
            );

        const alreadyLiked =
            notice.likes.includes(email);

        if (alreadyLiked) {

            notice.likes =
                notice.likes.filter(
                    user => user !== email
                );

        } else {

            notice.likes.push(email);

        }

        await notice.save();

        res.json(notice);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// DELETE NOTICE

exports.deleteNotice = async (req, res) => {

    try {

        await Notice.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Notice Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};