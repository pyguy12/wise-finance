import React, { useState } from 'react';
import { createTransaction } from './services/api';

function AddTransactionForm() {
    const [transactionData, setTransactionData] = useState({
        amount: '',
        category: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTransaction(transactionData);
        } catch (error) {
            console.error('Could not create transaction', error);
        }
    };

    const handleChange = (e) => {
        setTransactionData({
            ...transactionData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="amount"
                value={transactionData.amount}
                onChange={handleChange}
                placeholder="Amount"
            />
            <input
                type="text"
                name="category"
                value={transactionData.category}
                onChange={handleChange}
                placeholder="Category"
            />
            <input
                type="text"
                name="description"
                value={transactionData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddTransactionForm;
