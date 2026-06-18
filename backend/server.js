const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
const noteRoutes = require("./routes/noteRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const testimonialRoutes =
require("./routes/testimonialRoutes");
const statsRoutes =
require("./routes/statsRoutes");
const noticeRoutes =
    require("./routes/noticeRoutes");
    const commentRoutes =
require("./routes/commentRoutes");
const adminRoutes =
require("./routes/adminRoutes");
const feeRoutes =
require("./routes/feeRoutes");






app.use(cors());
app.use(express.json());

app.use(
    "/api/fees",
    feeRoutes
);
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/admission", admissionRoutes);
app.use(
    "/api/testimonial",
    testimonialRoutes
);
app.use(
    "/api/stats",
    statsRoutes
);
app.use(
    "/api/notices",
    noticeRoutes
);
app.use(
    "/api/comments",
    commentRoutes
);
app.use(
    "/api/admin",
    adminRoutes
);



mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = process.env.PORT || 5000;

const fs = require("fs");

console.log(
  "Uploads folder exists:",
  fs.existsSync("./uploads")
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});