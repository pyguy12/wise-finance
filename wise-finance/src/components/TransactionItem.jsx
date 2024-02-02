import React from 'react';

function TransactionItem({ transaction }) {
    return (
        <tr>
            <td className="relative py-5 pr-6">
                <div className="flex-auto">
                    <div className="flex items-start gap-x-3">
                        <div className="text-sm font-medium leading-6 text-gray-900">${transaction.amount}</div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
            </td>
            <td className="hidden py-5 pr-6 sm:table-cell">
                <div className="text-sm leading-6 text-gray-900">{transaction.category}</div>
                <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.description}</div>
            </td>
            <td className="py-5 text-right">
                <div className="flex justify-end">
                    <a href="#" className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                        View<span className="hidden sm:inline"> transaction</span>
                        <span className="sr-only">, {transaction.category}</span>
                    </a>
                </div>
                <div className="mt-1 text-xs leading-5 text-gray-500">
                    Transaction <span className="text-gray-900">#{transaction._id}</span>
                </div>
            </td>
        </tr>
    );
}

export default TransactionItem;
