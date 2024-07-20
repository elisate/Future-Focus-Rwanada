import { v2 as cloudinary } from "cloudinary";

import path from "path";
import fs from "fs";
import os from "os";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (buffer, fileName) => {
  return new Promise((resolve, reject) => {
    const tempFilePath = path.join(os.tmpdir(), fileName);

    fs.writeFile(tempFilePath, buffer, (writeError) => {
      if (writeError) {
        reject(writeError);
      } else {
        cloudinary.uploader.upload(tempFilePath, (uploadError, result) => {
          if (uploadError) {
            reject(new Error(uploadError.message));
          } else {
            resolve(result.secure_url);
          }
        });
      }
    });
  });
};

export default cloudinaryUpload;
