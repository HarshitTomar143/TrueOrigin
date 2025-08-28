// pages/api/chatbot.js
import { generateChatResponse, getInitialQuestions } from '../../utils/chatbotUtils';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message, currentProductKey } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const { response, suggestions, productKey } = generateChatResponse(message, currentProductKey);

    res.status(200).json({
      response,
      suggestions,
      productKey // Send this back to the frontend to maintain context
    });

  } else if (req.method === 'GET') {
    // Optional: Provide initial questions on a GET request for chatbot initialization
    res.status(200).json({
      response: "Hello! How can I help you today?",
      suggestions: getInitialQuestions()
    });
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
