import Story from "../models/story.js";

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getStory = async (req, res) => {
  try {
    const { id } = req.params;
    const story = await Story.findById(id).populate("userId");
    if (story) {
      return res.json(story);
    }
    res.status(404).json({ message: "Story not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const updateStory = async (req, res) => {
  const { id } = req.params;
  const story = await Story.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(story);
};
export const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Story.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("story deleted");
    }
    throw new Error("story not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
