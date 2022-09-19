import mongoose from "mongoose"

const { Schema, model } = mongoose;

const RestoreSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   restoreLink: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      required: true,
   }
});

export default model('Restore', RestoreSchema);