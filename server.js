const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route to ensure server is running
app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

// import product routes and use them
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

// connect to MongoDB 
mongoose.connect('mongodb+srv://cramsey1:C0u9KWRPkYmUNqfX@cluster0.2jpre63.mongodb.net/Marketplace?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});