// utils/chatbotUtils.js
import productData from '../data/productData';

// Function to normalize text for better matching
const normalizeText = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
};

// Function to get initial general questions
export const getInitialQuestions = () => {
  return [
    "What is a GI Tag?",
    "Why is this platform important?",
    "How can I learn more about a specific product?",
    "What kind of products are featured here?"
  ];
};

// Function to find a product by name or keyword
export const findProduct = (query) => {
  const normalizedQuery = normalizeText(query);
  for (const key in productData) {
    const product = productData[key];
    if (normalizeText(product.name).includes(normalizedQuery) ||
        normalizeText(product.description).includes(normalizedQuery) ||
        normalizeText(product.shortDescription).includes(normalizedQuery)) {
      return { key, ...product };
    }
  }
  return null;
};

// Function to generate product-specific questions
export const getProductQuestions = (productKey) => {
  const product = productData[productKey];
  if (!product) return [];

  const questions = [
    `Tell me more about the origin of ${product.name}.`,
    `What are the special features of ${product.name}?`,
    `What is the cultural significance of ${product.name}?`,
  ];

  if (product.culturalStories && product.culturalStories.length > 0) {
    questions.push(`Are there any cultural stories about ${product.name}?`);
  }

  return questions;
};

// Function to generate a response based on user input
export const generateChatResponse = (message, currentProductKey = null) => {
  const normalizedMessage = normalizeText(message);

  // Handle general questions
  if (normalizedMessage.includes("hi") || normalizedMessage.includes("hello") || normalizedMessage.includes("hey")) {
    return {
      response: "Hello! How can I help you today? You can ask me about GI Tags, or tell me which product you're interested in.",
      suggestions: getInitialQuestions()
    };
  }

  if (normalizedMessage.includes("what is a gi tag") || normalizedMessage.includes("gi tag")) {
    return {
      response: "A Geographical Indication (GI) Tag is a sign used on products that have a specific geographical origin and possess qualities or a reputation that are due to that origin. It's a form of intellectual property right.",
      suggestions: getInitialQuestions()
    };
  }

  if (normalizedMessage.includes("why this platform") || normalizedMessage.includes("important")) {
    return {
      response: "This platform aims to showcase and celebrate India's rich cultural heritage through its unique Geographical Indication (GI) tagged products, connecting you with their stories and significance.",
      suggestions: getInitialQuestions()
    };
  }

  // If a product is currently being discussed
  if (currentProductKey) {
    const product = productData[currentProductKey];
    if (product) {
      if (normalizedMessage.includes("origin") || normalizedMessage.includes("story")) {
        return {
          response: product.originStory,
          suggestions: getProductQuestions(currentProductKey)
        };
      }
      if (normalizedMessage.includes("special features") || normalizedMessage.includes("features")) {
        return {
          response: `The special features of ${product.name} include: ${product.specialFeatures.join(", ")}.`,
          suggestions: getProductQuestions(currentProductKey)
        };
      }
      if (normalizedMessage.includes("cultural significance") || normalizedMessage.includes("significance")) {
        return {
          response: product.culturalSignificance,
          suggestions: getProductQuestions(currentProductKey)
        };
      }
      if (normalizedMessage.includes("cultural stories") || normalizedMessage.includes("stories")) {
        if (product.culturalStories && product.culturalStories.length > 0) {
          const stories = product.culturalStories.map(s => `**${s.title}**: ${s.story}`).join("\n\n");
          return {
            response: `Here are some cultural stories about ${product.name}:\n\n${stories}`,
            suggestions: getProductQuestions(currentProductKey)
          };
        } else {
          return {
            response: `There are no specific cultural stories listed for ${product.name}.`,
            suggestions: getProductQuestions(currentProductKey)
          };
        }
      }
    }
  }

  // Try to identify a product from the message
  const foundProduct = findProduct(message);
  if (foundProduct) {
    return {
      response: `You're interested in ${foundProduct.name}! ${foundProduct.shortDescription}`,
      suggestions: getProductQuestions(foundProduct.key),
      productKey: foundProduct.key // Pass the product key back to the frontend
    };
  }

  // Default fallback
  return {
    response: "I'm sorry, I don't understand that. Can you please rephrase or ask about a specific product?",
    suggestions: getInitialQuestions()
  };
};
