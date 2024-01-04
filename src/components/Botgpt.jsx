import React, { useState } from 'react';
import './styles/Botgpt.scss';
import { IoMdSend } from "react-icons/io";

const Botgpt = () => {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSend = async () => {
    try {
      const apiUrl = `http://localhost:8000/chat?input_text=${encodeURIComponent(inputText)}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch response. Server response: ${errorText}`);
      }

      const responseData = await response.json();
      setConversation(prevConversation => [
        ...prevConversation,
        { user: true, text: inputText },
        { user: false, text: responseData.response },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setConversation(prevConversation => [
        ...prevConversation,
        { user: true, text: 'Error fetching response' },
      ]);
    }

    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {conversation.map((message, index) => (
          <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your question here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSend}><IoMdSend/></button>
      </div>
    </div>
  );
};

export default Botgpt;
