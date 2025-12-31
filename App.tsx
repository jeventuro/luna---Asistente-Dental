
import React, { useState, useRef, useEffect } from 'react';
import { Message, LeadInfo } from './types';
import { lunaService } from './services/geminiService';
import { ChatMessage } from './components/ChatMessage';
import { CLINIC_NAME, TREATMENTS } from './constants';
const FLAT_TREATMENTS = TREATMENTS.flatMap(c => c.treatments);


const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: '¡Hola! Soy Luna, tu asistente virtual de ' + CLINIC_NAME + '. ✨ ¿En qué puedo ayudarte hoy? 🦷',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await lunaService.sendMessage(input);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:w-80 flex-col bg-white border-r border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <h1 className="font-bold text-lg text-slate-800 leading-tight">{CLINIC_NAME}</h1>
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
          <section>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Horario de Atención</h3>
            <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 space-y-1">
              <p>Lunes - Sábado</p>
              <p className="font-medium text-slate-900">9:00 AM - 1:00 PM</p>
              <p className="font-medium text-slate-900">3:00 PM - 8:30 PM</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Promoción Destacada</h3>
            <div className="bg-teal-50 border border-teal-100 p-3 rounded-lg text-sm">
              <p className="text-teal-800 font-semibold mb-1">Blanqueamiento 2x1 (15% off)</p>
              <p className="text-teal-600">¡Ven con un amigo y ahorren juntos este mes! ✨</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Nuestros Precios
            </h3>

            <div className="space-y-2">
              {FLAT_TREATMENTS.slice(0, 4).map((t, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start text-xs p-2 border-b border-slate-100 last:border-0"
                >
                  <div className="flex flex-col">
                    <span className="text-slate-600 font-medium leading-tight">
                      {t.name}
                    </span>
                    
                  </div>

                  <span className="font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded whitespace-nowrap">
                    S/. {t.price}
                  </span>
                </div>
              ))}

              <p className="text-[10px] text-slate-400 mt-2 italic">
                * Precios referenciales sujetos a valoración clínica.
              </p>
            </div>
          </section>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-100">
           <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl text-blue-700">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase opacity-75">Emergencias</p>
                <p className="font-bold text-sm">979 785 495</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-full bg-slate-50 relative">
        {/* Header - Mobile & Desktop */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="font-bold text-slate-800">Luna</h2>
              <p className="text-[11px] text-green-600 font-medium">En línea • Asistente Virtual</p>
            </div>
          </div>
          
          <button className="lg:hidden p-2 text-slate-400" onClick={() => alert("Información de la clínica disponible en vista de escritorio.")}>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
        </header>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar"
        >
          {messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-center bg-white border border-slate-100 p-3 rounded-2xl shadow-sm space-x-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <footer className="bg-white border-t border-slate-200 p-4 lg:p-6">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 bg-slate-100 border-none rounded-2xl px-5 py-3.5 text-slate-700 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`p-3.5 rounded-2xl transition-all ${
                !input.trim() || isTyping 
                  ? 'bg-slate-100 text-slate-300' 
                  : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 active:scale-95'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
          <p className="text-[10px] text-center text-slate-400 mt-3">
             Luna puede responder dudas frecuentes. Para diagnósticos, siempre agenda una cita presencial.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
