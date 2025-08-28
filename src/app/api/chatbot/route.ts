import { NextRequest, NextResponse } from 'next/server';
import { getInitialQuestions, generateChatResponse } from '@/lib/chatbotUtils';
import { productData } from '@/lib/productData';

// GET endpoint for initial chatbot greeting and questions
export async function GET() {
  try {
    const initialData = getInitialQuestions();
    
    return NextResponse.json({
      success: true,
      data: initialData
    });
  } catch (error) {
    console.error('Error in chatbot GET:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get initial questions' },
      { status: 500 }
    );
  }
}

// POST endpoint for chat responses
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userInput, currentProductKey } = body;
    
    if (!userInput || typeof userInput !== 'string') {
      return NextResponse.json(
        { success: false, error: 'User input is required' },
        { status: 400 }
      );
    }
    
    // Generate response using the chatbot utilities
    const response = generateChatResponse(userInput, productData, currentProductKey);
    
    return NextResponse.json({
      success: true,
      data: response
    });
  } catch (error) {
    console.error('Error in chatbot POST:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
