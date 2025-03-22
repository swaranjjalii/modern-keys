
import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import Button from '../shared/Button';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // In a real app, these would come from a backend/API
  const [conversation, setConversation] = useState([
    { 
      role: 'bot', 
      content: 'Hello! I\'m your AI real estate assistant. How can I help you today?' 
    }
  ]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to conversation
    setConversation([
      ...conversation,
      { role: 'user', content: message }
    ]);
    
    // Clear input
    setMessage('');
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      let botResponse;
      
      if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
        botResponse = "Property prices vary based on location, size, and amenities. Our luxury homes typically range from $1M to $10M. Would you like me to show you properties in a specific price range?";
      } else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('area')) {
        botResponse = "We have luxury properties in various prime locations. Popular areas include Beverly Hills, Malibu, Manhattan, and Miami Beach. Which area are you most interested in?";
      } else if (message.toLowerCase().includes('recommend') || message.toLowerCase().includes('suggestion')) {
        botResponse = "Based on current market trends, properties in Downtown areas are showing excellent investment potential with 8.3% annual appreciation. Would you like to see some recommendations?";
      } else {
        botResponse = "I'd be happy to help with that. To provide the best assistance, could you tell me more about your property preferences like location, budget, or specific features you're looking for?";
      }
      
      setConversation([
        ...conversation,
        { role: 'user', content: message },
        { role: 'bot', content: botResponse }
      ]);
    }, 1000);
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
              />
              <Button 
                type="submit" 
                variant="gold" 
                className="rounded-l-none py-2"
                icon={<Send size={18} />}
                aria-label="Send message"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Powered by AI for instant answers to your real estate questions
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
