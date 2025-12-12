import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import CachedContent from '@/models/CachedContent';

export async function POST(req: Request) {
  try {
    const { subjectId, userId } = await req.json();
    
    if (!subjectId || !userId) {
        return NextResponse.json({ cachedIdentifiers: [] });
    }

    await connectDB();

    // Find all identifiers (Topic Names / "Full Paper") that exist for this user & subject
    const results = await CachedContent.find(
      { subject_id: subjectId, user_id: userId },
      { identifier: 1, _id: 0 } // Select only the identifier field
    );

    const cachedIdentifiers = results.map((item) => item.identifier);
    
    return NextResponse.json({ cachedIdentifiers });

  } catch (error) {
    console.error("Cache Check Error:", error);
    return NextResponse.json({ cachedIdentifiers: [] }); // Fail safe: return empty
  }
}