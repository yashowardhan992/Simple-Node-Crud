const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");

router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
