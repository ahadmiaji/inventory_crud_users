const express = require("express");
const { getAllPurchases, createPurchase, getOnePurchase, updatePurchase, deletePurchase } = require("../controllers/purchase.controller");
const router = express.Router();


router.get("/", getAllPurchases);
router.post("/", createPurchase);
router.put("/", updatePurchase);
router.get("/:id", getOnePurchase);
router.delete("/:id", deletePurchase);

module.exports = router;