const Comment = require("../models/Comment");

// CREATE COMMENT

exports.createComment = async (req, res) => {


try {

    const comment =
        await Comment.create(req.body);

    res.status(201).json(comment);

} catch (error) {

    res.status(500).json({
        message: error.message
    });

}


};

// GET COMMENTS OF A NOTICE

exports.getComments = async (req, res) => {


try {

    const comments =
        await Comment.find({

            noticeId:
                req.params.noticeId

        })

        .populate(
            "parentComment",
            "userName message"
        )

        .sort({

            createdAt: 1

        });

    res.json(comments);

} catch (error) {

    res.status(500).json({
        message: error.message
    });

}


};

// DELETE COMMENT

exports.deleteComment = async (req, res) => {


try {

    await Comment.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:
            "Comment Deleted"
    });

} catch (error) {

    res.status(500).json({
        message: error.message
    });

}


};
