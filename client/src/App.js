import React, { useState, useEffect } from "react";
import "./App.css";
const axios = require("axios");

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const postMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages", {
      body: inputValue,
      user: user,
    });
    setInputValue("");
  };
  useEffect(() => {
    const rdm = Math.random(1, 2000);
    setUser(`Guest#${rdm}`);
    setInterval(async () => {
      const { data } = await axios.get("/messages");
      setMessages(data);
    }, 1000);
  }, []);

  return (
    <div>
      <form onSubmit={postMessage}>
        <input
          type='text'
          id='messageInput'
          required='true'
          onChange={handleChange}
        />
        <button id='sendButton' type='submit'>
          Send
        </button>
      </form>
      <input
        id='changeUserInput'
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <div className='messagesContainer'>
        {messages.map((msgData) => (
          <div
            className={msgData.user === user ? "my-msg msg" : "other-msg msg"}
            key={Math.random(1, 2000)}>
            <strong> {msgData.user} </strong>
            {msgData.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
