import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Subject from '@/models/Subject';

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Await the params (Fix for Next.js 15)
    const params = await props.params;
    const id = params.id;

    await connectDB();

    // 2. Fetch the subject
    const subject = await Subject.findById(id);

    if (!subject) {
      return NextResponse.json(
        { error: "Subject not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ subject });

  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}