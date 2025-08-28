// Chatbot utility functions for True Origin platform

// Get initial greeting and suggested questions
export const getInitialQuestions = () => {
  return {
    greeting: "Namaste! I'm your True Origin guide. I can help you learn about India's rich cultural heritage, GI-tagged products, and traditional crafts. What would you like to know?",
    suggestedQuestions: [
      "What is a GI Tag?",
      "Why is this platform important?",
      "Tell me about Madhubani Paintings",
      "What are the benefits of GI tags?",
      "How can I learn more about traditional crafts?"
    ]
  };
};

// Get product-specific questions based on available data
export const getProductQuestions = (product) => {
  const questions = [];
  
  if (product.originStory) {
    questions.push("Tell me about its origin");
  }
  
  if (product.specialFeatures && product.specialFeatures.length > 0) {
    questions.push("What are its special features?");
  }
  
  if (product.culturalSignificance) {
    questions.push("What is its cultural significance?");
  }
  
  if (product.culturalStories && product.culturalStories.length > 0) {
    questions.push("Share some cultural stories");
  }
  
  if (product.origin) {
    questions.push("Where does it come from?");
  }
  
  if (product.type) {
    questions.push("What type of product is this?");
  }
  
  return questions;
};

// Find product by user query
export const findProduct = (query, productData) => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Check for exact matches first
  for (const [key, product] of Object.entries(productData)) {
    if (product.name.toLowerCase() === normalizedQuery) {
      return { productKey: key, product, matchType: 'exact' };
    }
  }
  
  // Check for partial matches
  for (const [key, product] of Object.entries(productData)) {
    if (product.name.toLowerCase().includes(normalizedQuery) || 
        normalizedQuery.includes(product.name.toLowerCase()) ||
        product.type.toLowerCase().includes(normalizedQuery) ||
        product.origin.toLowerCase().includes(normalizedQuery)) {
      return { productKey: key, product, matchType: 'partial' };
    }
  }
  
  return null;
};

// Generate chat response based on user input and context
export const generateChatResponse = (userInput, productData, currentProductKey = null) => {
  const normalizedInput = userInput.toLowerCase().trim();
  
  // If we have a current product context, handle product-specific questions
  if (currentProductKey && productData[currentProductKey]) {
    const product = productData[currentProductKey];
    
    if (normalizedInput.includes('origin') || normalizedInput.includes('where') || normalizedInput.includes('come from')) {
      if (product.originStory) {
        return {
          response: `The origin story of ${product.name} is fascinating! ${product.originStory}`,
          productKey: currentProductKey,
          suggestedQuestions: getProductQuestions(product)
        };
      } else if (product.origin) {
        return {
          response: `${product.name} originates from ${product.origin}.`,
          productKey: currentProductKey,
          suggestedQuestions: getProductQuestions(product)
        };
      }
    }
    
    if (normalizedInput.includes('special') || normalizedInput.includes('feature')) {
      if (product.specialFeatures && product.specialFeatures.length > 0) {
        const features = product.specialFeatures.join(', ');
        return {
          response: `The special features of ${product.name} include: ${features}`,
          productKey: currentProductKey,
          suggestedQuestions: getProductQuestions(product)
        };
      }
    }
    
    if (normalizedInput.includes('cultural') || normalizedInput.includes('significance')) {
      if (product.culturalSignificance) {
        return {
          response: `${product.name} holds great cultural significance: ${product.culturalSignificance}`,
          productKey: currentProductKey,
          suggestedQuestions: getProductQuestions(product)
        };
      }
    }
    
    if (normalizedInput.includes('story') || normalizedInput.includes('stories')) {
      if (product.culturalStories && product.culturalStories.length > 0) {
        const stories = product.culturalStories.map(story => 
          `${story.title}: ${story.story}`
        ).join('\n\n');
        return {
          response: `Here are some cultural stories about ${product.name}:\n\n${stories}`,
          productKey: currentProductKey,
          suggestedQuestions: getProductQuestions(product)
        };
      }
    }
    
    if (normalizedInput.includes('type')) {
      return {
        response: `${product.name} is a ${product.type} from ${product.origin}.`,
        productKey: currentProductKey,
        suggestedQuestions: getProductQuestions(product)
      };
    }
  }
  
  // Handle general questions
  if (normalizedInput.includes('gi tag') || normalizedInput.includes('geographical indication')) {
    return {
      response: "A GI (Geographical Indication) tag is a sign used on products that have a specific geographical origin and possess qualities or a reputation that are due to that origin. It's like a 'birth certificate' for products, protecting their unique identity and ensuring quality standards.",
      productKey: null,
      suggestedQuestions: getInitialQuestions().suggestedQuestions
    };
  }
  
  if (normalizedInput.includes('important') || normalizedInput.includes('platform')) {
    return {
      response: "This platform is important because it preserves and promotes India's rich cultural heritage. GI tags help protect traditional knowledge, support local artisans, ensure product quality, and create economic opportunities for communities while maintaining the authenticity of traditional products.",
      productKey: null,
      suggestedQuestions: getInitialQuestions().suggestedQuestions
    };
  }
  
  if (normalizedInput.includes('benefit')) {
    return {
      response: "GI tags provide several benefits: they protect traditional knowledge, ensure product quality and authenticity, create market recognition, support local economies, preserve cultural heritage, and help consumers make informed choices about genuine products.",
      productKey: null,
      suggestedQuestions: getInitialQuestions().suggestedQuestions
    };
  }
  
  if (normalizedInput.includes('traditional') || normalizedInput.includes('craft')) {
    return {
      response: "Traditional crafts are the heart of India's cultural heritage. They represent centuries-old skills passed down through generations, unique regional techniques, and the artistic expression of different communities. Learning about them helps preserve our cultural identity and supports artisan communities.",
      productKey: null,
      suggestedQuestions: getInitialQuestions().suggestedQuestions
    };
  }
  
  // Try to find a product if user is asking about something specific
  const productMatch = findProduct(userInput, productData);
  if (productMatch) {
    const { product, productKey } = productMatch;
    return {
      response: `Great question! ${product.name} is ${product.shortDescription} It originates from ${product.origin}.`,
      productKey: productKey,
      suggestedQuestions: getProductQuestions(product)
    };
  }
  
  // Fallback response
  return {
    response: "I'm here to help you learn about India's traditional products and GI tags! You can ask me about specific products, GI tags, or general questions about our cultural heritage. What would you like to know?",
    productKey: null,
    suggestedQuestions: getInitialQuestions().suggestedQuestions
  };
};
