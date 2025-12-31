
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.role === 'assistant';

  return (
    <div className={`flex w-full mb-4 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[80%] ${isAssistant ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          isAssistant ? 'bg-blue-100 text-blue-600 mr-2' : 'bg-teal-100 text-teal-600 ml-2'
        }`}>
          {isAssistant ? 'L' : 'U'}
        </div>
        <div className={`p-3 rounded-2xl shadow-sm border ${
          isAssistant 
            ? 'bg-white border-blue-50 text-slate-700 rounded-tl-none' 
            : 'bg-teal-600 border-teal-500 text-white rounded-tr-none'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          <span className={`text-[10px] mt-1 block opacity-60 text-right`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};
