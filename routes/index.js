const { Router } = require("express");

const productRouter = require("./product.route");
const orderRouter = require("./order.route");
const addressRouter = require("./address.route");
const purchaseRouter = require("./purchase.route");

const router = Router();

router.use("/api/v1/products", productRouter);
router.use("/api/v1/orders", orderRouter);
router.use("/api/v1/addresses", addressRouter);
router.use("/api/v1/purchases", purchaseRouter);


router.get("/", (req, res) => {
    res.send("welcome to the server");
});

router.all("*", (req, res, next) => {
    res.send("404 Not Found");
});

module.exports = router;