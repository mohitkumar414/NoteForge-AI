import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import connectDB from '@/lib/db';
import CachedContent from '@/models/CachedContent';

export const maxDuration = 60; 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { topics, subject, type, subjectId, identifier, userId } = await req.json();

    if (!topics || !subject || !subjectId || !identifier || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectDB();

    // CHECK DATABASE FIRST
    const existingData = await CachedContent.findOne({
      user_id: userId,
      subject_id: subjectId,
      type: type,
      identifier: identifier
    });

    if (existingData) {
      console.log(`⚡ Serving '${identifier}' for User ${userId} from Cache`);
      return NextResponse.json({ content: existingData.content, source: 'cache' });
    }

    // IF NOT FOUND, CALL AI
    console.log(`🤖 Cache Miss - Generating '${identifier}' for User ${userId}...`);
    
    let prompt = "";
    if (type === 'paper') {
        prompt = `
        You are a strict university examiner for B.Tech students.
        Subject: ${subject}
        Topics to cover: ${topics.join(", ")}

        Create a **Sample Examination Paper** strictly following this format:
        **Total Marks:** 70 | **Time:** 3 Hours
        **Instructions:** Answer any FIVE questions.

        **Structure:**
        1. **Questions 1-7:** Two parts (a) & (b), 7 marks each. (Mix of theory and numericals).
        2. **Question 8:** Short notes on any THREE topics (5 options provided). Total 14 marks.

        **Output:**
        1. The Question Paper.
        2. A Detailed Answer Key/Solutions Section.
        
        Use Markdown. Keep it academic and challenging.
      `;
    } else {
        prompt = `
        You are an expert engineering professor for a B.Tech student.
        Subject: ${subject}
        
        Please generate detailed, easy-to-understand study notes for the following syllabus topics:
        ${topics.join(", ")}

        Guidelines:
        - Use Markdown formatting (## Headings, **Bold** for key terms).
        - Explain concepts simply with real-world analogies where possible.
        - If a topic involves code (like C/Java/Python), provide a short snippet.
        - Keep it concise but comprehensive.
        - Don't start with an introduction like 'hello', 'welcome'; jump straight into the notes.
      `;
    }

    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    ];

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      safetySettings: safetySettings 
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // SAVING TO DATABASE
    if (text) {
      await CachedContent.create({
        user_id: userId,
        subject_id: subjectId,
        type: type,
        identifier: identifier,
        content: text
      });
      console.log("💾 Saved to Database for User:", userId);
    }

    return NextResponse.json({ content: text, source: 'ai' });

  } catch (error: any) {
    console.error("Generate Error:", error);
    
    // Checking for Rate Limit / Quota Exceeded
    if (error.message?.includes("429") || error.message?.includes("Resource has been exhausted")) {
        return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}