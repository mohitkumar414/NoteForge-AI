import { NextResponse } from 'next/server';
import { auth } from "@/auth"; // Use the auth helper we created
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    // 1. Verify the user is actually logged in
    const session = await auth();
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Get data from the form
    const { branch, semester } = await req.json();

    if (!branch || !semester) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    // 3. Update the user in the database
    // We use the email from the secure session, not the client, for security
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { branch, semester },
      { new: true } // Return the updated document
    );

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}