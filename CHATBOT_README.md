# True Origin Chatbot System

## Overview
The True Origin chatbot is an intelligent assistant that helps users learn about India's traditional products, GI tags, and cultural heritage. It provides contextual responses based on user queries and maintains conversation context for product-specific questions.

## How It Works

### 1. Initial Interaction
- When the user first opens the chatbot, the frontend makes a GET request to `/api/chatbot`
- The `getInitialQuestions()` function provides a greeting and suggested general questions
- Users see questions like "What is a GI Tag?" or "Why is this platform important?"

### 2. General Questions
- The `generateChatResponse` function in `chatbotUtils.js` has hardcoded responses for basic questions
- This approach is simple and effective for a "not complicated chatbot"
- **Management**: To add or modify general questions and answers, edit the `generateChatResponse` function in `src/lib/chatbotUtils.js`

### 3. Product-Specific Questions
- When a user asks about a specific product (e.g., "Tell me about Madhubani Paintings"), the `findProduct` function attempts to identify the product
- If a product is found, the chatbot responds with a description and suggests product-specific questions using `getProductQuestions()`
- The `productKey` is returned to the frontend for context maintenance

### 4. Maintaining Context (Frontend Responsibility)
- The frontend stores the `productKey` received from the backend
- When users ask follow-up questions (e.g., "Tell me about its origin"), the frontend sends the `currentProductKey` back to the backend
- The `generateChatResponse` function uses this context to provide detailed answers about the specific product

### 5. Adding New Products and Information
- **Data Management**: All product information is stored in `src/lib/productData.ts`
- To add a new product or update existing ones, modify this JavaScript object
- **Question Generation**: The `getProductQuestions` function dynamically generates questions based on available fields
- If you add new fields, update `getProductQuestions` and `generateChatResponse` accordingly

### 6. Fallback Responses
- If the chatbot doesn't understand a query, it provides a generic fallback message
- Re-suggests initial general questions to guide users

## File Structure

```
src/
├── lib/
│   ├── chatbotUtils.js          # Core chatbot logic and response generation
│   └── productData.ts           # Product information database
├── app/
│   └── api/
│       └── chatbot/
│           └── route.ts         # API endpoints (GET/POST)
└── components/
    ├── Chatbot.tsx              # Main chatbot interface component
    └── ChatbotToggle.tsx        # Toggle button to open chatbot
```

## API Endpoints

### GET `/api/chatbot`
- Returns initial greeting and suggested questions
- Used when chatbot is first opened

### POST `/api/chatbot`
- Accepts user input and current product context
- Returns chatbot response and updated suggested questions
- Body: `{ userInput: string, currentProductKey?: string }`

## Frontend Integration

### Chatbot Toggle Button
- Fixed position at bottom-right of the screen
- Green gradient design matching True Origin theme
- Animated with pulse effect and hover states

### Chatbot Interface
- Modal-style chat window (400px width, 500px height)
- Real-time message updates with smooth animations
- Suggested questions displayed below messages
- Responsive design with proper scrolling

### Integration Points
- **Home Page**: `/src/app/home/page.tsx`
- **Products Page**: `/src/app/home/products/page.tsx`
- Can be added to any other page by importing components

## Customization

### Adding New Response Types
1. Edit `src/lib/chatbotUtils.js`
2. Add new condition in `generateChatResponse` function
3. Update `getProductQuestions` if needed
4. Test with the new query type

### Modifying Product Questions
1. Edit `getProductQuestions` function in `chatbotUtils.js`
2. Add/remove question types based on available product data
3. Ensure questions match the data structure in `productData.ts`

### Styling Changes
1. Modify `Chatbot.tsx` for interface changes
2. Modify `ChatbotToggle.tsx` for button appearance
3. Colors use True Origin theme (`#3A5B22`, `#4A7C59`)

## Example Usage Flow

1. **User opens chatbot** → GET `/api/chatbot` → Shows greeting + suggested questions
2. **User asks**: "What is a GI Tag?" → POST `/api/chatbot` → Returns GI tag explanation
3. **User asks**: "Tell me about Madhubani Paintings" → POST `/api/chatbot` → Returns product info + product-specific questions
4. **User asks**: "Tell me about its origin" → POST `/api/chatbot` with `currentProductKey: "madhubanipaintings"` → Returns origin story
5. **User asks**: "What are its special features?" → POST `/api/chatbot` with same context → Returns special features

## Error Handling

- **API Failures**: Graceful fallback to default messages
- **Product Not Found**: Generic response with suggested general questions
- **Network Issues**: User-friendly error messages
- **Invalid Input**: Validation and helpful guidance

## Performance Considerations

- **Lazy Loading**: Chatbot only initializes when opened
- **Efficient Matching**: Product search uses optimized algorithms
- **Context Caching**: Product context maintained in frontend state
- **Minimal API Calls**: Only makes requests when needed

## Future Enhancements

- **Natural Language Processing**: More sophisticated query understanding
- **Multi-language Support**: Hindi and other Indian languages
- **Voice Input**: Speech-to-text capabilities
- **Rich Media**: Image and video responses
- **Analytics**: Track popular questions and user interactions
- **Learning**: Improve responses based on user feedback

## Troubleshooting

### Common Issues
1. **Chatbot not opening**: Check if components are properly imported
2. **API errors**: Verify `/api/chatbot` route exists and functions correctly
3. **Product not found**: Ensure product exists in `productData.ts`
4. **Styling issues**: Check Tailwind CSS classes and custom styles

### Debug Mode
- Console logs in `chatbotUtils.js` for response generation
- Network tab for API request/response inspection
- React DevTools for component state debugging

## Support

For technical issues or feature requests:
1. Check the console for error messages
2. Verify API endpoints are working
3. Review product data structure
4. Test with different query types

The chatbot system is designed to be simple yet powerful, providing users with an intuitive way to learn about India's rich cultural heritage and traditional products.
