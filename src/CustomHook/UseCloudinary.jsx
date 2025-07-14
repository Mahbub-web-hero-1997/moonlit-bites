import React from "react";

const UseCloudinary = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
  const [uploading, setUploading] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const uploadImage = async (file) => {
    setUploading(true);
    setErr(null);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      setErr(error.message);
    } finally {
      setUploading(false);
    }
  };
  return { uploadImage, uploading, err };
};

export default UseCloudinary;
