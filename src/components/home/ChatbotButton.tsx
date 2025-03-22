
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import Button from '../shared/Button';
import { useToast } from "@/hooks/use-toast";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const [conversation, setConversation] = useState([
    { 
      role: 'bot', 
      content: 'Hello! I\'m your AI real estate assistant. How can I help you today?' 
    }
  ]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to conversation
    const updatedConversation = [
      ...conversation,
      { role: 'user', content: message }
    ];
    
    setConversation(updatedConversation);
    
    // Clear input
    setMessage('');
    setIsAiThinking(true);
    
    try {
      // Prepare conversation history for AI context
      const aiContext = updatedConversation.map(msg => ({
        role: msg.role === 'bot' ? 'assistant' : 'user',
        content: msg.content
      }));
      
      // Add system message to guide AI responses
      const systemMessage = {
        role: 'system',
        content: 'You are an AI real estate assistant. You help users find properties, understand market trends, and provide information about real estate investing. Be professional, knowledgeable, and helpful. Provide specific information about luxury properties when possible. Your responses should be concise but informative.'
      };
      
      // Make request to OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || ''}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [systemMessage, ...aiContext],
          temperature: 0.7,
          max_tokens: 300
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }
      
      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'Sorry, I couldn\'t process your request.';
      
      // Add AI response to conversation
      setConversation([
        ...updatedConversation,
        { role: 'bot', content: aiResponse }
      ]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Fallback response if API fails
      toast({
        title: "AI Service Error",
        description: "Couldn't connect to the AI service. Using fallback responses.",
        variant: "destructive"
      });
      
      // Provide fallback response based on keywords
      let fallbackResponse;
      
      if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
        fallbackResponse = "Property prices vary based on location, size, and amenities. Our luxury homes typically range from $1M to $10M. Would you like me to show you properties in a specific price range?";
      } else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('area')) {
        fallbackResponse = "We have luxury properties in various prime locations. Popular areas include Beverly Hills, Malibu, Manhattan, and Miami Beach. Which area are you most interested in?";
      } else if (message.toLowerCase().includes('recommend') || message.toLowerCase().includes('suggestion')) {
        fallbackResponse = "Based on current market trends, properties in Downtown areas are showing excellent investment potential with 8.3% annual appreciation. Would you like to see some recommendations?";
      } else {
        fallbackResponse = "I'd be happy to help with that. To provide the best assistance, could you tell me more about your property preferences like location, budget, or specific features you're looking for?";
      }
      
      setConversation([
        ...updatedConversation,
        { role: 'bot', content: fallbackResponse }
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };
  
  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? 'bg-white text-navy rotate-90' : 'bg-navy text-white hover:bg-navy-light'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[500px] glass-card shadow-lg z-50 overflow-hidden flex flex-col animate-zoom-in">
          {/* Header */}
          <div className="bg-navy text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles size={20} className="mr-2 text-gold" />
              <h3 className="font-medium">AI Real Estate Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-navy text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isAiThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none max-w-[80%] p-3 flex items-center">
                  <Loader2 size={16} className="animate-spin mr-2" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-navy/50"
                placeholder="Type your message..."
                disabled={isAiThinking}
              />
              <Button 
                type="submit" 
                variant="gold" 
                className="rounded-l-none py-2"
                icon={isAiThinking ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                aria-label="Send message"
                disabled={isAiThinking || !message.trim()}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {isAiThinking 
                ? 'AI is generating a response...' 
                : 'Powered by AI for instant answers to your real estate questions'}
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
