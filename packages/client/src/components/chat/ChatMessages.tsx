import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export type Message = {
  content: string;
  role: 'user' | 'bot';
};

type Props = {
  messages: Message[];
  onCopyMessage: (e: React.ClipboardEvent<HTMLDivElement>) => void;
};

function ChatMessages({ messages, onCopyMessage }: Props) {
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return messages.map(({ content, role }, i) => (
    <div
      key={i}
      ref={i === messages.length - 1 ? lastMessageRef : null}
      onCopy={onCopyMessage}
      className={`prose px-3 py-1 max-w-md rounded-xl ${
        role === 'user'
          ? 'bg-blue-600 text-white self-end'
          : 'bg-gray-100 text-black self-start'
      }`}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  ));
}

export default ChatMessages;
