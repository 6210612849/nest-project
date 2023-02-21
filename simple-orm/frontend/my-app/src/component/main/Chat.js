import React from 'react';
import { useLocation,useNa } from 'react-router-dom';
import ChatForm from './ChatForm';

function Chat () {
    const {state} = useLocation();
   console.log(state)
  return (
    <div>
      <h2>Chat Dashboard</h2>
      <h3>
        welcome {state.aaaa.username}

      </h3>
      <ChatForm ></ChatForm>
    </div>
  );
}

export default Chat;