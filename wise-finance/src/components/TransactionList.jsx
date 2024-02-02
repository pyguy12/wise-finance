import React, { useEffect, useState, Fragment } from 'react';
import { fetchTransactions } from '../services/api';
import TransactionItem from './TransactionItem';

function TransactionList() {
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                    Recent activity
                </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <table className="w-full text-left">
                            <thead className="sr-only">
                                <tr>
                                    <th>Amount</th>
                                    <th className="hidden sm:table-cell">Category</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction) => (
                                    <TransactionItem key={transaction._id} transaction={transaction} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionList;
