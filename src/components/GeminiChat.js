// Gemini Chat Component - Simple JavaScript Integration
class GeminiChat {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models';
    this.model = 'gemini-2.0-flash'; // Working model
  }

  async sendMessage(message, conversationHistory = []) {
    try {
      const contents = [
        ...conversationHistory.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ];

      const response = await fetch(`${this.baseUrl}/${this.model}:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'API request failed');
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
    }
  }

  async testConnection() {
    try {
      const testResponse = await this.sendMessage('Hello, respond with just "Connection successful"');
      console.log('✅ Gemini API Test:', testResponse);
      return true;
    } catch (error) {
      console.error('❌ Gemini API Test Failed:', error.message);
      return false;
    }
  }
}

// Export for use in React components
export default GeminiChat;

// Usage example:
// const geminiChat = new GeminiChat('YOUR_API_KEY_HERE');
// geminiChat.testConnection(); // Test the connection
// const response = await geminiChat.sendMessage('Hello!');
