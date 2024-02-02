import React from 'react';
import TransactionList from '../components/TransactionList';

const TransactionsPage = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <TransactionList />
            </div>
        </div>
    );
};

export default TransactionsPage;
