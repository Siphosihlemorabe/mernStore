import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);


// Create and export the model
const Product = mongoose.model('Product', productSchema);



export default Product;
