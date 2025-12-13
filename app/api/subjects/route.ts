import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Subject from '@/models/Subject';

interface RequestBody {
  branch: string;
  semester: number;
}

export async function POST(req: NextRequest) {
  try {
    
    await connectDB();

    // Reading the user's selection from the request body
    const body: RequestBody = await req.json();
    const { branch, semester } = body;

    if (!branch || !semester) {
      return NextResponse.json(
        { error: "Branch and Semester are required" },
        { status: 400 }
      );
    }

    console.log(`🔍 Searching for: ${branch} - Sem ${semester}`);

    // Finding subjects matching the criteria
    const subjects = await Subject.find({ 
      branch: branch, 
      semester: semester 
    }).select('subject_name _id');

    return NextResponse.json({ subjects });

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}