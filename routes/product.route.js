const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const { getProducts, getProduct, createProdcut, updateProduct, deleteProduct } = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", createProdcut);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;


