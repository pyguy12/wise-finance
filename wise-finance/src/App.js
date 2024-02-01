import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Import your page components
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/transactions">Transactions</Link>
            <div>
                {/* Other components like header or navbar */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                    {/* More routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
