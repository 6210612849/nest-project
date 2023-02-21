import logo from './logo.svg';
import './App.css';
import Dashboard from './component/main/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Chat from './component/main/Chat';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
