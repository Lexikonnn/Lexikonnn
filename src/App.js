import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import Layout from './components/layout/Layout';
import Main from './pages/Main';

function App() {
  document.title = "Jan Skrzeczek";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Main /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;