// import multer from "multer";

// const configureMulter = () => {
//   const storage = multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, "uploads/");
//     },
//     filename(req, file, cb) {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     },
//   });

//   const upload = multer({
//     storage,
//     limits: {
//       fileSize: 50 * 1024 * 1024,
//       files: 1,
//     },
//   }).single("videos","documents","images");

//   return upload;
// };

// export default configureMulter();
import multer from "multer";
import fs from "fs";
import path from "path";

const configureMulter = () => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      let uploadPath = "uploads/";
      if (file.fieldname === "videos") {
        uploadPath += "videos/";
      } else if (file.fieldname === "documents") {
        uploadPath += "documents/";
      } else if (file.fieldname === "images") {
        uploadPath += "images/";
      }

      // Ensure the directory exists
      const fullPath = path.resolve(uploadPath);
      fs.mkdirSync(fullPath, { recursive: true });

      cb(null, uploadPath);
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({
    storage,
    limits: {
      fileSize: 50 * 1024 * 1024, // 50 MB
    },
    fileFilter(req, file, cb) {
      const allowedFormats = {
        videos: ["video/mp4", "video/mpeg","video/mp3"],
        documents: [
          "application/pdf",
          "application/ppt",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        images: ["image/jpeg", "image/png", "image/gif"],
      };
      if (
        allowedFormats[file.fieldname] &&
        allowedFormats[file.fieldname].includes(file.mimetype)
      ) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type"), false);
      }
    },
  }).fields([
    { name: "videos", maxCount: 5 },
    { name: "documents", maxCount: 5 },
    { name: "images", maxCount: 5 },
  ]);

  return upload;
};

export default configureMulter();
