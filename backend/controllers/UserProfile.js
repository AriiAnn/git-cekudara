import Users from "../models/UserModel.js";
import path from "path";
import fs from "fs";

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Mengambil ID pengguna dari token JWT atau sesuai kebutuhan aplikasi Anda
    const userProfile = await Users.findByPk(userId, {
      attributes: ["id", "name", "email", "profile_image", "full_name", "gender"],
    });

    if (!userProfile) {
      return res.status(404).json({ message: "Profil pengguna tidak ditemukan" });
    }

    res.json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil profil pengguna" });
  }
};

export const updateUserProfileWithImage = async (req, res) => {
  try {
    const userId = req.user.id; // Mengambil ID pengguna dari token JWT atau sesuai kebutuhan aplikasi Anda
    const { full_name, gender } = req.body;

    let profile_image = ""; // Simpan nama file gambar profil

    if (req.files && req.files.profile_image) {
      const profileImage = req.files.profile_image;
      const ext = path.extname(profileImage.name);
      const allowedTypes = [".png", ".jpg", ".jpeg"];

      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Invalid image format. Please upload a valid image." });
      }

      if (profileImage.size > 5000000) {
        return res.status(422).json({ msg: "Image size must be less than 5 MB." });
      }

      profile_image = `${userId}_${Date.now()}${ext}`; // Nama file baru yang diunggah
      const uploadPath = `./public/profile_images/${profile_image}`; // Path penyimpanan file

      await profileImage.mv(uploadPath); // Simpan file ke direktori

      // Hapus file gambar profil lama jika ada
      const user = await Users.findByPk(userId);
      if (user.profile_image) {
        const oldImagePath = `./public/profile_images/${user.profile_image}`;
        fs.unlinkSync(oldImagePath);
      }
    }

    // Update informasi profil pengguna
    const user = await Users.findByPk(userId);
    if (user) {
      user.full_name = full_name || user.full_name; // Jika tidak ada data baru, gunakan data lama
      user.gender = gender || user.gender; // Jika tidak ada data baru, gunakan data lama
      user.profile_image = profile_image || user.profile_image; // Jika tidak ada gambar baru, gunakan gambar lama
      await user.save();

      return res.status(200).json({ message: "Profile updated successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update profile" });
  }
};
