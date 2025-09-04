import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings.jsx';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/create" element={<CreateAccount />}/>
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  )
}

export default App