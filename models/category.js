const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://souru:Souru27@ecart.xszsykk.mongodb.net/?retryWrites=true&w=majority");


connect.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch((error) => {
    console.log("Failed to connect to MongoDB", error);
});



const categorySchema = new mongoose.Schema({
    name: { type: String, required: true,unique: true},
    description: { type: String },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;