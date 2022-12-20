const express = require("express");
const router = express.Router();
const { getAllProducts, getOneProduct, createProduct, deleteProduct, updateProduct } = require("../controllers/product.controller");


router.get("/", getAllProducts );
router.post("/", createProduct);
router.put("/", updateProduct);

router.get("/:id", getOneProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
