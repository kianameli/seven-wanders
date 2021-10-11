import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Story = new Schema(
  {
    location: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    userID: { type: String, required: true }, //key to user in users table?
    story: { type: String, required: true, unique: true },
    imageURL: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("stories", Story);
