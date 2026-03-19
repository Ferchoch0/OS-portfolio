import { useState, useRef, useEffect, useCallback, memo } from 'react';
import s from './Chatbot.module.css';

const ENDPOINT =
    'https://alison-unresistant-flourishingly.ngrok-free.dev/n8n/webhook/92243dd1-cab0-4406-b301-26c9442a7d08/chat';

const WELCOME_MSG = {
    role: 'bot',
    text: '¡Hola! 🦦 Soy Cheko, el asistente de OtterSolution. ¿En qué puedo ayudarte hoy?',
};

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const sessionId = useRef(crypto.randomUUID());
    const messagesEnd = useRef(null);
    const inputRef = useRef(null);
    const hasGreeted = useRef(false);

    // auto-scroll on new messages / typing
    useEffect(() => {
        messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // focus input when opened
    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    // Popup timer
    useEffect(() => {
        let hideTimer;
        const timer = setTimeout(() => {
            if (!hasGreeted.current && !isOpen) {
                setShowPopup(true);
                // Hide popup after 6 seconds if no interaction
                hideTimer = setTimeout(() => {
                    setShowPopup(false);
                }, 6000);
            }
        }, 6500); // 6.5 seconds delay
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, [isOpen]);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => {
            const next = !prev;
            // send welcome message on first open
            if (next && !hasGreeted.current) {
                hasGreeted.current = true;
                setMessages([WELCOME_MSG]);
            }
            if (next) {
                setShowPopup(false);
            }
            return next;
        });
    }, []);

    const sendMessage = useCallback(async () => {
        const text = input.trim();
        if (!text) return;

        const userMsg = { role: 'user', text };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({
                    action: 'sendMessage',
                    sessionId: sessionId.current,
                    chatInput: text,
                }),
            });

            const data = await res.json();
            const botText = data.output || 'Lo siento, no pude procesar tu mensaje.';
            setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: 'bot', text: '⚠️ Hubo un error de conexión. Intenta de nuevo.' },
            ]);
        } finally {
            setIsTyping(false);
        }
    }, [input]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        },
        [sendMessage]
    );

    return (
        <>
            {/* Chat window */}
            <div className={`${s.window} ${isOpen ? s.windowOpen : ''}`}>
                {/* Header */}
                <div className={s.header}>
                    <div className={s.avatar}>
                        <img src="/img/icons/chatbot.png" alt="Cheko" className={s.avatarImg} />
                    </div>
                    <div className={s.headerInfo}>
                        <div className={s.headerName}>Cheko</div>
                        <div className={s.headerStatus}>Asistente en línea</div>
                    </div>
                    <button
                        className={s.closeBtn}
                        onClick={toggleOpen}
                        aria-label="Cerrar chat"
                    >
                        ✕
                    </button>
                </div>

                {/* Messages */}
                <div className={s.messages}>
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`${s.msgRow} ${msg.role === 'bot' ? s.msgRowBot : s.msgRowUser
                                }`}
                        >
                            {msg.role === 'bot' && (
                                <img src="/img/icons/chatbot.png" alt="Cheko Logo" className={s.botMsgAvatar} />
                            )}
                            <div
                                className={`${s.bubble} ${msg.role === 'bot' ? s.bubbleBot : s.bubbleUser
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className={`${s.msgRow} ${s.msgRowBot}`}>
                            <img src="/img/icons/chatbot.png" alt="Cheko Logo" className={s.botMsgAvatar} />
                            <div className={s.typing}>
                                <span className={s.typingText}>Cheko está escribiendo</span>
                                <span className={s.dots}>
                                    <span className={s.dot} />
                                    <span className={s.dot} />
                                    <span className={s.dot} />
                                </span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEnd} />
                </div>

                {/* Input */}
                <div className={s.inputArea}>
                    <input
                        ref={inputRef}
                        className={s.input}
                        type="text"
                        placeholder="Escribe tu mensaje..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isTyping}
                    />
                    <button
                        className={s.sendBtn}
                        onClick={sendMessage}
                        disabled={isTyping || !input.trim()}
                        aria-label="Enviar mensaje"
                    >
                        ➤
                    </button>
                </div>
            </div>

            {/* FAB */}
            <button
                className={`${s.fab} ${isOpen ? s.fabOpen : ''}`}
                onClick={toggleOpen}
                aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con Cheko'}
            >
                {isOpen ? '✕' : <img src="/img/icons/chatbot.png" alt="Chatbot" className={s.fabImg} />}
            </button>

            {/* Popup Message */}
            <div className={`${s.popupMessage} ${showPopup && !isOpen ? s.popupMessageVisible : ''}`}>
                ¿Puedo ayudarte en algo?
            </div>
        </>
    );
}

export default memo(Chatbot);
