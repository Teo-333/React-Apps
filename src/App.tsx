import React from 'react';

import './styles/App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Main/Main';
import Main from './pages/Menu/Main/Main';
import Home from './pages/Home/Main/Main';
import Error from './pages/Error/Main/Main';
import Company from './pages/Company/Main/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
        <div className="container">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/menu" element={<Main />} />
              <Route path="/home" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/login" element={<Login />} />
              <Route path="/order" element={<PrivateRoute />}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Router>
        </div>
    </AuthProvider>
  );
}

export default App;