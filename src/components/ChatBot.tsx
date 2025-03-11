"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Edwin's AI assistant. How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      setMessages(prevMessages => [
        ...prevMessages, 
        { id: prevMessages.length + 1, text: botResponse, isUser: false }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Portfolio-specific responses
    if (input.includes('who are you') || input.includes('what is your name')) {
      return "I'm an AI assistant for Edwin Shaju, a UI/UX Designer and Frontend Developer.";
    } else if (input.includes('experience') || input.includes('work history')) {
      return "Edwin has over 5 years of experience in UI/UX design and frontend development. He has worked as a Senior UI/UX Designer at Creative Agency, Frontend Developer at Tech Solutions Inc., and UI Designer at Digital Studio.";
    } else if (input.includes('skills') || input.includes('what can you do')) {
      return "Edwin's skills include UI/UX Design (Figma, Adobe XD, Sketch, Prototyping, Wireframing, User Research) and Frontend Development (React.js, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML/CSS).";
    } else if (input.includes('contact') || input.includes('hire') || input.includes('email')) {
      return "You can contact Edwin through the contact form on this website, or directly via email at hello@edwinshaju.com.";
    } else if (input.includes('portfolio') || input.includes('projects')) {
      return "Edwin's portfolio showcases various projects including a Medical Dashboard, E-commerce Platform, and Social Media App. You can explore them in the Projects section.";
    } else if (input.includes('services') || input.includes('offer')) {
      return "Edwin offers UI/UX design services including user research, wireframing, prototyping, and visual design. He also provides frontend development services with React.js and Next.js.";
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I help you learn more about Edwin's work?";
    } else {
      return "I don't have specific information about that. Would you like to know about Edwin's experience, skills, projects, or how to contact him?";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors text-white"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
          {/* Chat Header */}
          <div className="bg-primary text-white px-4 py-3 flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <span className="text-sm font-bold">E</span>
            </div>
            <div>
              <h3 className="font-medium">Edwin's AI Assistant</h3>
              <p className="text-xs text-white/80">Ask me anything about Edwin's portfolio</p>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-3">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg px-4 py-2 ${
                    message.isUser 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-gray-100 dark:bg-gray-700 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg rounded-bl-none px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-3">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-700 dark:text-white"
              />
              <button 
                type="submit"
                className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary-dark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 