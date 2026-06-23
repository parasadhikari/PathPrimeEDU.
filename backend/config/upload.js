const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => ({
        folder: "pathprimeedu-notes",
        resource_type: "auto",
        public_id:
            Date.now() +
            "-" +
            file.originalname
    })
});

const upload = multer({
    storage
});

module.exports = upload;