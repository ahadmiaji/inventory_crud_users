const express = require("express");
const router = express.Router();
const { getAllOrders, createOrder, updateOrder, getOneOrder, deleteOrder } = require("../controllers/order.controller");


router.get("/", getAllOrders);
router.post("/", createOrder);
router.put("/", updateOrder);
router.get("/:id", getOneOrder);
router.delete("/:id", deleteOrder);

module.exports = router;