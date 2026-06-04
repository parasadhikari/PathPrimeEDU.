const express = require("express");

const router = express.Router();

const upload = require("../config/multer");

const {
    uploadNote,
    getNotes,
    getPyqs
} = require("../controllers/noteController");

router.post(
    "/upload",
    upload.single("pdf"),
    uploadNote
);

router.get("/", getNotes);
router.get("/pyqs", getPyqs);

module.exports = router;