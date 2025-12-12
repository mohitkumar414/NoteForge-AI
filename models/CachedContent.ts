import mongoose from 'mongoose';

const CachedContentSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  type: { type: String, enum: ['notes', 'paper'], required: true },
  identifier: { type: String, required: true }, // e.g., "Module 1: Introduction" or "Full Paper"
  content: { type: String, required: true }, // The Markdown text
}, { timestamps: true });

// Index for fast searching
CachedContentSchema.index({ user_id: 1, subject_id: 1, type: 1, identifier: 1 }, { unique: true });

export default mongoose.models.CachedContent || mongoose.model('CachedContent', CachedContentSchema);