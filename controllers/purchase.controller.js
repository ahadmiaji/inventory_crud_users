const Purchase = require("../models/purchase.model");

const getAllPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find();
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createPurchase = async (req, res) => {
    try {
        const newPurchase = await Purchase.create(req.body);

        res.status(201).json(newPurchase);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const getOnePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.create({ id: req.params.id });
        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const updatePurchase = async (req, res) => {
    try {

        const updateData = req.body;

        const purchaseInfo = await purchase.findById(req.body.id);

        if (!purchaseInfo) {
            const customError = new Error("Invalid purchase.");
            customError.statusCode = 400;
            throw customError;
        }

        const purchaseData = new Address(purchaseInfo);
        let isChanged = false;

        if (updateData.userId && purchaseInfo.userId !== updateData.userId) {
            isChanged = true;
            purchaseData.userId = updateData.userId;
        }

        if (updateData.productId && purchaseInfo.productId !== updateData.productId) {
            isChanged = true;
            purchaseData.productId = updateData.productId;
        }

        if (updateData.productReceived && purchaseInfo.productReceived !== updateData.productReceived) {
            isChanged = true;
            purchaseData.productReceived = updateData.productReceived;
        }

        if (updateData.purchaseDate && purchaseInfo.purchaseDate !== updateData.purchaseDate) {
            isChanged = true;
            purchaseData.purchaseDate = updateData.purchaseDate;
        }

        if (isChanged) {
            const updatePurchase = await purchaseData.save();

            return res.json({
                success: true,
                statusCode: 200,
                addresses: updatePurchase
            });
        }

    } catch (err) {
        console.log("Error: ", err);

    }
};

const deletePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.findByIdAndDelete(req.params.id);
        res.json("deleted");
    } catch (err) {
        throw err;
    }
};

module.exports = { getAllPurchases, createPurchase, getOnePurchase, updatePurchase, deletePurchase };