const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products && products === null && products === undefined) {
      return res.status(404).json({ message: "Product does not exists" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products && products === null && products === undefined) {
      return res.status(404).json({ message: "Product was not created!" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if(!product && product === null && product === undefined){
        return res.status(400).json({message : "Product not found"});
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
      if(!product && product === null && product === undefined){
        return res.status(400).json({message : "Product not found"});
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id,req.body);
      if(!product && product === null && product === undefined){
        return res.status(404).json({message : "Product not found"});
      }     
      res.status(200).json({message: "Product Deleted successfully"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}


module.exports={
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
}