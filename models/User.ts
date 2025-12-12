import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  image: String,
  branch: { type: String, default: null }, // Stored preference
  semester: { type: Number, default: null }, // Stored preference
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);