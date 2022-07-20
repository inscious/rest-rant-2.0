import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: { type: String, default: "Anonymous" },
    rant: { type: String, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: "" },
});

// module.exports = mongoose.model("Comment", commentSchema);
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
