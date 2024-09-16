import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(`Error in fetching data: ${error}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { name, price, image } = req.body; // Destructure the product properties

  if (!name || !price || !image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product({ name, price, image });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json({ success: true, message: "Product created successfully", data: savedProduct });
  } catch (error) {
    console.error(`Error in creating product: ${error}`);
    res.status(500).json({ success: false, message: "Server error, could not create product." });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const id = req.params.id; // Correctly extract id from params
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(`Error in updating product: ${error}`);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid product ID" });
  }

  try {
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product removed" });
  } catch (error) {
    console.error(`Error in deleting product: ${error}`);
    res.status(500).json({ success: false, message: "Server error, could not delete product." });
  }
};
