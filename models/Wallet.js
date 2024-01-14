// models/Wallet.js
const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://souru:Souru27@ecart.xszsykk.mongodb.net/?retryWrites=true&w=majority");


connect.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch((error) => {
    console.log("Failed to connect to MongoDB", error);
});

const walletSchema = new mongoose.Schema({
    balance: { type: Number, default: 0.0 },
    transactions: [
        {
            amount: { type: Number, required: true },
            type: { type: String, enum: ['add', 'reduce', 'referral_bonus'], required: true }, // Include 'referral_bonus'
            timestamp: { type: Date, default: Date.now },
        },
    ],
});


const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
