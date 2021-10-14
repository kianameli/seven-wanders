import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Story = new Schema(
  {
    location: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    story: { type: String, required: true, unique: true },
    imageURL: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

export default mongoose.model("stories", Story);
