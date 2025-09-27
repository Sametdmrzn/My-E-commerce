const Product = require("../models/Product");

// Tüm ürünleri getir
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// Yeni ürün ekle
const createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
};

module.exports = { getProducts, createProduct };
