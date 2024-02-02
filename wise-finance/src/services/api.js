import axios from 'axios';

const API_URL = 'http://localhost:3000/api/transactions';

export const fetchTransactions = async () => {
    return axios.get(API_URL);
};

export const createTransaction = async (transactionData) => {
    return axios.post(API_URL, transactionData);
};

export const updateTransaction = async (id, transactionData) => {
    return axios.patch(`${API_URL}/${id}`, transactionData);
};

export const deleteTransaction = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
