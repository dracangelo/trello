// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import BoardDashboard from './components/Board/BoardDashboard'; // Import the BoardDashboard
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<BoardDashboard />} /> {/* Use BoardDashboard on the home page */}
          </Routes>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
