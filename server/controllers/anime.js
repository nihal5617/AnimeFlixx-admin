import UserModal from "../models/anime.js";

export const addAnime = async (req, res) => {
  const { name, thumbnail, desc, delay, video } = req.body;
  const anime = new UserModal({ name, thumbnail, desc, delay, video });
  try {
    await anime.save();
    res.status(201).json(anime);
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};
