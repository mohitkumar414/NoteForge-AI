import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import connectDB from '@/lib/db';
import CachedContent from '@/models/CachedContent';

export const maxDuration = 150;

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
You are a strict academic examiner for B.Tech engineering exams.
Subject: ${subject}

generate "Model Exam Answers" for the following syllabus topics:
${topics.join(", ")}

Your goal is to provide content that a student can write **word-for-word** in their examination answer sheet to score maximum marks.

Strict Guidelines for Each Topic:
1. **Formal Definition**: Start with a precise, academic definition (2-3 lines).
2. **Key Concepts (Point-wise)**: Explain the working principle or core concept using bullet points. Avoid long paragraphs.
3. **Diagram/Flowchart Description**: Include a text block describing exactly what diagram the student should draw (e.g., "[Draw a block diagram showing Input -> Process -> Output]").
4. **Technical Details**: Use technical terminology and standard keywords.
5. **Code/Formula**: If applicable, provide the standard syntax, formula, or a generic code snippet (C/Java/Python).
6. **Advantages & Disadvantages**: Provide 3-4 points for each.
7. **Applications**: List 2-3 real-world uses.

Formatting Rules:
- Use Markdown.
- **Bold** all keywords and technical terms.
- No conversational filler (e.g., "Imagine this is like...").
- Keep the tone formal, objective, and academic.
- Structure the output exactly how it should appear on the exam paper.
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