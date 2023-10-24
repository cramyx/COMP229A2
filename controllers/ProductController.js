const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    console.log('Inside getAllProducts function');
    try {
        const products = await Product.find();
        console.log(products);
        res.json(products);
    } catch (err) {
        console.error('Error in getAllProducts:', err);
        res.status(500).send(err.message);
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Product not found");
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.addNewProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).send("Product not found");
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.removeProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.send("Product deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.removeAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.send("All products deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.findProductsByName = async (req, res) => {
    try {
        const products = await Product.find({ name: new RegExp(req.query.name, 'i') });
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
};