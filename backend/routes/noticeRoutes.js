const express = require("express");

const router = express.Router();

const {

    createNotice,
    getNotices,
    likeNotice,
    deleteNotice

} = require(
    "../controllers/noticeController"
);

router.post(
    "/",
    createNotice
);

router.get(
    "/",
    getNotices
);

router.put(
    "/like/:id",
    likeNotice
);

router.delete(
    "/:id",
    deleteNotice
);

module.exports = router;