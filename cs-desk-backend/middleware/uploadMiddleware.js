const multer = require("multer");
const path = require("path");

// Set up storage engine
const storage = multer.diskStorage({
    destination: (req, file,cd) => {
        cd(null, "uploads/");

    },
    filename: (req, file, cd) => {
        cd(null, Date.now() + path.extname(file.originalname));
    },
});

// File filter
const fileFilter = (req, file, cd) => {
    if (file.mimetype === "application/pdf") {
        cd(null, true);
    } else {
        cd(new Error("Only PDF files are allowed"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;