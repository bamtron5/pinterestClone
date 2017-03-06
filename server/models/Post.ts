import * as mongoose from 'mongoose';

export interface IPost extends mongoose.Document {
  comment: string;
  image: string;
}

let PostSchema = new mongoose.Schema({
  comment: { type: String, max: 160, min: 0 },
  image: { type: String },
  owner: { type: String }
});

export const Post = mongoose.model<IPost>('Post', PostSchema);
