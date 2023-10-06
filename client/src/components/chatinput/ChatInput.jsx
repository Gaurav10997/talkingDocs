import React, { useRef } from 'react'
import "./chatinput.css"


function ChatInput() {
  const inputRef = useRef();
  const handleSubmit = () =>{
  }

  return (
    <form className="msger-inputarea"  onSubmit={handleSubmit}>
    <input
        type="text"
        className="msger-input"
        placeholder="Enter your message..."
        ref= {inputRef}
    />
    <button type="submit" className="msger-send-btn">
        Send
    </button>
    </form>
  )
}

export default ChatInput