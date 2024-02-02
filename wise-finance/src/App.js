import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import AddTransactionPage from './pages/AddTransactionPage';

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
                    <Route path="/add-transaction" element={<AddTransactionPage />} />
                    {/* More routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
