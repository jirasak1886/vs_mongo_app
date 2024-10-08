const express = require("express");
const router = express.Router();
const { getProducts, getProductID, postProduct, updateProduct, deleteProduct } = require("../controller/productController");
const authenticateToken  = require("../middleware/auth"); 

router.get("/products", authenticateToken, getProducts);
router.get("/product/:id", authenticateToken, getProductID);
router.post("/product", authenticateToken, postProduct);
router.put("/product/:id", authenticateToken, updateProduct);
router.delete("/product/:id", authenticateToken, deleteProduct);

module.exports = router;