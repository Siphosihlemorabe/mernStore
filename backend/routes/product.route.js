import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Middleware to log requests
router.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Route handler to get all products
router.get("/", getProducts);

// Route to add a new product
router.post("/",createProduct );

// Route to delete a product by ID
router.delete("/:id", deleteProduct);
router.put("/:id",updateProduct)

export default router;
