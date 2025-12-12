import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ status: "Success", message: "🔥 Connected to MongoDB successfully!" });
  } catch (error: any) {
    return NextResponse.json({ status: "Error", error: error.message }, { status: 500 });
  }
}