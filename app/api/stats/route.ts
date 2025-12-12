import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import CachedContent from '@/models/CachedContent';
import Subject from '@/models/Subject';

export async function POST(req: Request) {
  try {
    const { userId, branch, semester } = await req.json();
    if (!userId) return NextResponse.json({ data: [] });

    await connectDB();

    // 1. Get all subjects for this semester
    const subjects = await Subject.find({ branch, semester }).select('subject_name modules');

    // 2. Get all cached content counts for this user
    const cachedData = await CachedContent.aggregate([
      { $match: { user_id: userId, type: 'notes' } }, // Only count notes, not papers
      { $group: { _id: "$subject_id", count: { $sum: 1 } } }
    ]);

    // 3. Map it together
    const stats = subjects.map(sub => {
        const cached = cachedData.find(c => c._id.toString() === sub._id.toString());
        return {
            name: sub.subject_name,
            completed: cached ? cached.count : 0,
            total: sub.modules.length,
            fullMark: sub.modules.length // for Radar chart max domain
        };
    });

    return NextResponse.json({ data: stats });

  } catch (error) {
    console.error("Stats Error:", error);
    return NextResponse.json({ data: [] });
  }
}