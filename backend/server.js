import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import path, { dirname } from 'path'

const app = express();
const __dirname = path.resolve();

// Middleware to parse JSON requests
app.use(express.json());

app.use("/api/products",productRoutes);
const PORT = process.env.PORT || 5000;
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"/fullstack-store/frontend/dist")));
  
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })
}


// Start server
app.listen(PORT, () => {
  connectDB(); // Ensure database connection is established before server starts
  console.log("Server running on http://localhost:5000");
});
