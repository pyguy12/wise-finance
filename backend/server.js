require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const Transaction = require('./models/Transaction');

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// Basic Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/transaction', async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(201).send(newTransaction);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/transaction', async (req, res) => {
    try {
        const transactions = await Transaction.find({});
        res.send(transactions);
    } catch (error) {
        res.status(500).send();
    }
});

app.patch('/api/transaction/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!transaction) {
            return res.status(404).send();
        }
        res.send(transaction);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/api/transaction/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) {
            return res.status(404).send();
        }
        res.send(transaction);
    } catch (error) {
        res.status(500).send();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
