import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
  username: String,
  content: String,
});

export default model('comments', commentSchema);
