const Order = require("../models/order.model");


const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);

        res.status(201).json(newOrder);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOneOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ id: req.params.id });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateOrder = async (req, res) => {
    try {

        const updateData = req.body;

        const orderInfo = await Order.findById(req.body.id);

        if (!orderInfo) {
            const customError = new Error("Invalid order.");
            customError.statusCode = 400;
            throw customError;
        }

        const orderData = new Product(orderInfo);
        let isChanged = false;

        if (updateData.title && orderInfo.title !== updateData.title) {
            isChanged = true;
            orderData.title = updateData.title;
        }

        if (updateData.userId && orderInfo.userId !== updateData.userId) {
            isChanged = true;
            orderData.userId = updateData.userId;
        }

        if (updateData.productId && orderInfo.productId !== updateData.productId) {
            isChanged = true;
            orderData.productId = updateData.productId;
        }

        if (updateData.numberShipped && orderInfo.numberShipped !== updateData.numberShipped) {
            isChanged = true;
            orderData.numberShipped = updateData.numberShipped;
        }

        if (updateData.orderDate && orderInfo.orderDate !== updateData.orderDate) {
            isChanged = true;
            orderData.orderDate = updateData.orderDate;
        }


        if (isChanged) {
            const updateOrder = await orderData.save();

            return res.json({
                success: true,
                statusCode: 200,
                products: updateOrder
            });
        }

    } catch (err) {
        console.log("Error: ", err);
        // throw err;
    }
};

const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.json("deleted");
    } catch (err) {
        throw err;
    }
};


module.exports = { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder };