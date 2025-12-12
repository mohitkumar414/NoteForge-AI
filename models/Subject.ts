import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. Define the interface for a single Module
interface IModule {
  module_number: number;
  title: string;
  topics: string[];
}

// 2. Define the interface for the Subject Document
export interface ISubject extends Document {
  branch: string;
  semester: number;
  subject_name: string;
  modules: IModule[];
  createdAt?: Date;
  updatedAt?: Date;
}

// 3. Create the Schema
const SubjectSchema = new Schema<ISubject>({
  branch: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  subject_name: {
    type: String,
    required: true,
  },
  modules: [
    {
      module_number: Number,
      title: String,
      topics: [String],
    }
  ]
}, { timestamps: true });

// 4. Export the Model (Handle Hot Reloading)
const Subject: Model<ISubject> = mongoose.models.Subject || mongoose.model<ISubject>('Subject', SubjectSchema);

export default Subject;