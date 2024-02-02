import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './services/api';

function TransactionList({ transactions }) {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchTransactions();
                setTransactions(response.data);
            } catch (error) {
                console.error('Could not fetch transactions', error);
            }
        };

        loadData();
    }, []);

    return (
        <div>
            <ul className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                    <li key={transaction._id} className="py-4 flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-900">{transaction.category}</p>
                            <p className="text-sm text-gray-500">{transaction.description}</p>
                        </div>
                        <p className="text-sm text-gray-500">${transaction.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
