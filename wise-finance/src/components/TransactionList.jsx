import React, { useEffect, useState, Fragment } from 'react';
import { fetchTransactions } from '../services/api';

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
                                    <Fragment key={transaction._id}>
                                        <tr className="text-sm leading-6 text-gray-900">
                                            <th
                                                scope="colgroup"
                                                colSpan={4}
                                                className="relative isolate py-2 font-semibold"
                                            >
                                                <time dateTime={transaction.date}>
                                                    {new Date(transaction.date).toLocaleDateString()}
                                                </time>
                                                <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                            </th>
                                        </tr>
                                        <tr>
                                            <td className="relative py-5 pr-6">
                                                <div className="flex-auto">
                                                    <div className="flex items-start gap-x-3">
                                                        <div className="text-sm font-medium leading-6 text-gray-900">
                                                            ${transaction.amount}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                                            </td>
                                            <td className="hidden py-5 pr-6 sm:table-cell">
                                                <div className="text-sm leading-6 text-gray-900">
                                                    {transaction.category}
                                                </div>
                                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                                    {transaction.description}
                                                </div>
                                            </td>
                                            <td className="py-5 text-right">
                                                <div className="flex justify-end">
                                                    <a
                                                        href="#"
                                                        className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        View<span className="hidden sm:inline"> transaction</span>
                                                        <span className="sr-only">, {transaction.category}</span>
                                                    </a>
                                                </div>
                                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                                    Transaction{' '}
                                                    <span className="text-gray-900">#{transaction._id}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </Fragment>
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
